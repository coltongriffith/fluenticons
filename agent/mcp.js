// A remote MCP server (Streamable HTTP transport, stateless) at
// https://fluenticons.co/mcp, served by functions/mcp.js. The tools call the
// same operations as the HTTP API (agent/tools.js).
import { InputError, LIMITS, about, getIcon, iconCode, recommendIcons, searchIcons, similarIcons } from "./tools.js";
import { CORS, json, rateLimit, readJson } from "./http.js";
import { PLATFORMS, STYLES } from "./icons.js";
import { track } from "./track.js";

const PROTOCOL_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];

const INSTRUCTIONS = `Fluent Icons: Microsoft's Fluent UI System Icons (${about.source.package} ${about.source.version}).
Use it whenever you pick a Fluent icon, instead of guessing component names.
1. search_icons with what the icon should mean ("user permissions", "billing"), or recommend_icons for a set of navigation/menu items.
2. Use a returned name exactly. Every React component returned exists in @fluentui/react-icons, e.g. import { PersonLock24Regular } from "@fluentui/react-icons".
3. For another size, style or platform, call get_icon or get_icon_code; don't build names yourself.`;

const styleProp = { type: "string", enum: STYLES, description: "Icon style. Default: regular (outlined)." };
const sizeProp = { type: "integer", description: "Size in px, e.g. 16, 20, 24, 28, 32, 48. Default: 24 (or the nearest size)." };
const platformProp = { type: "string", enum: PLATFORMS, description: "Code platform. Default: react." };
const nameProp = { type: "string", description: 'Icon name in any form: "PersonLock", "person_lock" or a component like "PersonLock24Regular".', maxLength: LIMITS.label };
const readOnly = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };

const TOOLS = [
  {
    name: "search_icons",
    title: "Search Fluent icons",
    description:
      "Find Microsoft Fluent UI icons by meaning or name (e.g. \"user permissions\", \"billing\", \"delete\"). Returns real icon names with their @fluentui/react-icons component and import, best match first.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "What the icon should represent, or part of its name.", maxLength: LIMITS.query },
        style: styleProp,
        size: sizeProp,
        limit: { type: "integer", minimum: 1, maximum: LIMITS.results, description: "Number of results (default 10)." },
        platform: { ...platformProp, description: "Also include code for this platform in each result (react is always included)." },
      },
      required: ["query"],
    },
    annotations: readOnly,
    run: searchIcons,
  },
  {
    name: "get_icon",
    title: "Get a Fluent icon",
    description:
      "Details of one Fluent icon: every style and size, exact React component names, platforms with published code, SVG URLs and related icons. Use it to check that a size/style exists.",
    inputSchema: { type: "object", properties: { icon_name: nameProp, style: styleProp, size: sizeProp }, required: ["icon_name"] },
    annotations: readOnly,
    run: getIcon,
  },
  {
    name: "recommend_icons",
    title: "Recommend icons for UI items",
    description:
      "Pick one Fluent icon for each UI item (navigation, menu, tabs, settings sections…), all in the same style and size and without repeats. Returns components and a single import line.",
    inputSchema: {
      type: "object",
      properties: {
        items: {
          type: "array",
          maxItems: LIMITS.items,
          description: 'UI items, e.g. [{"label": "Billing", "description": "subscriptions and invoices"}]. Plain strings also work.',
          items: {
            anyOf: [
              { type: "string", maxLength: LIMITS.label },
              {
                type: "object",
                properties: {
                  label: { type: "string", maxLength: LIMITS.label },
                  description: { type: "string", maxLength: LIMITS.description },
                },
                required: ["label"],
              },
            ],
          },
        },
        style: styleProp,
        size: sizeProp,
        platform: platformProp,
      },
      required: ["items"],
    },
    annotations: readOnly,
    run: recommendIcons,
  },
  {
    name: "get_icon_code",
    title: "Get code for a Fluent icon",
    description: `Ready-to-use code for one icon variant. Platforms: ${PLATFORMS.join(", ")} (only those published for the variant).`,
    inputSchema: {
      type: "object",
      properties: { icon_name: nameProp, platform: platformProp, style: styleProp, size: sizeProp },
      required: ["icon_name"],
    },
    annotations: readOnly,
    run: iconCode,
  },
  {
    name: "find_similar_icons",
    title: "Find similar Fluent icons",
    description: "Icons related to one icon (same subject or shape), for alternatives or a matching set.",
    inputSchema: {
      type: "object",
      properties: { icon_name: nameProp, limit: { type: "integer", minimum: 1, maximum: LIMITS.results } },
      required: ["icon_name"],
    },
    annotations: readOnly,
    run: similarIcons,
  },
];
const toolList = TOOLS.map(({ run, ...tool }) => tool);

const rpcError = (id, code, message) => ({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });

async function handleMessage(msg, context) {
  if (!msg || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") {
    return rpcError(msg?.id, -32600, "Invalid request");
  }
  const { id, method, params = {} } = msg;
  const isNotification = id === undefined || id === null;
  if (isNotification) return null;
  switch (method) {
    case "initialize": {
      const requested = params.protocolVersion;
      track(context, "mcp_initialize", {
        channel: "mcp",
        mcp_client: String(params.clientInfo?.name || "unknown").slice(0, 60),
        protocol: requested,
      });
      return {
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion: PROTOCOL_VERSIONS.includes(requested) ? requested : PROTOCOL_VERSIONS[0],
          capabilities: { tools: { listChanged: false } },
          serverInfo: { name: "fluent-icons", title: "Fluent Icons", version: "1.0.0", websiteUrl: "https://fluenticons.co/ai/" },
          instructions: INSTRUCTIONS,
        },
      };
    }
    case "ping":
      return { jsonrpc: "2.0", id, result: {} };
    case "tools/list":
      return { jsonrpc: "2.0", id, result: { tools: toolList } };
    case "tools/call": {
      const tool = TOOLS.find((t) => t.name === params.name);
      if (!tool) return rpcError(id, -32602, `Unknown tool: ${params.name}`);
      try {
        const { status, body } = await tool.run(params.arguments || {}, context, "mcp");
        return {
          jsonrpc: "2.0",
          id,
          result: {
            content: [{ type: "text", text: JSON.stringify(body) }],
            structuredContent: body,
            isError: status !== 200,
          },
        };
      } catch (err) {
        if (err instanceof InputError) {
          return { jsonrpc: "2.0", id, result: { content: [{ type: "text", text: err.message }], isError: true } };
        }
        console.error(err);
        return rpcError(id, -32603, "Internal error");
      }
    }
    case "resources/list":
      return { jsonrpc: "2.0", id, result: { resources: [] } };
    case "prompts/list":
      return { jsonrpc: "2.0", id, result: { prompts: [] } };
    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

export async function handleMcp(context) {
  const { request } = context;
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (request.method !== "POST") {
    // No server-to-client stream: this server only answers requests.
    return json(
      { error: { code: "method_not_allowed", message: "This is an MCP server (Streamable HTTP). Send JSON-RPC with POST. Setup: https://fluenticons.co/ai/" } },
      405,
      { allow: "POST, OPTIONS" }
    );
  }
  const limit = rateLimit(request);
  if (limit.response) return limit.response;
  let body;
  try {
    body = await readJson(request, 65536);
  } catch (err) {
    return json(rpcError(null, -32700, err.message), 400);
  }
  const messages = Array.isArray(body) ? body.slice(0, 20) : [body];
  const replies = (await Promise.all(messages.map((m) => handleMessage(m, context)))).filter(Boolean);
  if (!replies.length) return new Response(null, { status: 202, headers: { "access-control-allow-origin": "*" } });
  return json(Array.isArray(body) ? replies : replies[0], 200, limit.headers);
}
