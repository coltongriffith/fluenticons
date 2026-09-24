// Usage analytics for the agent API and MCP server, sent to the site's GA4
// property from the server (agents don't run gtag). Agent events have their
// own names (api_* and mcp_*), so they never mix with the website's search,
// select_content and copy events.
//
// Sent with the GA4 Measurement Protocol when the Pages project has a
// GA_API_SECRET environment variable (a Measurement Protocol API secret of that
// property's data stream), otherwise with the same endpoint gtag uses. Nothing
// is sent from local development or preview deployments (only requests to
// fluenticons.co count); tracking never delays or breaks a response.
//
// Recorded: the event, search words (first 100 characters), result count, the
// icons returned or chosen, platform, size, style and the kind of client
// (from its User-Agent). Not recorded: IP addresses, descriptions sent to
// recommend, or anything else from the request. The client ID is a hash of
// IP + User-Agent that changes every month, so repeat use can be counted
// without identifying anyone.
// Agent events go to the GA4 property in the AGENT_GA_ID environment variable
// (a property of their own keeps them out of the website's reports), else to
// the website's property.
const SITE_GA_ID = "G-VGSV4M0LY9";

const CLIENTS = [
  [/claude/i, "claude"],
  [/cursor/i, "cursor"],
  [/codex|openai/i, "codex"],
  [/copilot|vscode|visual studio code/i, "vscode"],
  [/windsurf|codeium/i, "windsurf"],
  [/gemini|google/i, "gemini"],
  [/fluenticons-cli/i, "cli"],
  [/mcp/i, "mcp-other"],
  [/curl|wget|httpie/i, "curl"],
  [/python|aiohttp|httpx/i, "python"],
  [/node|undici|axios|deno|bun/i, "node"],
  [/mozilla/i, "browser"],
];
export function clientType(ua) {
  return CLIENTS.find(([re]) => re.test(ua || ""))?.[1] || (ua ? "other" : "none");
}

async function clientId(request) {
  const ip = request.headers.get("cf-connecting-ip") || "";
  const ua = request.headers.get("user-agent") || "";
  const month = new Date().toISOString().slice(0, 7);
  const data = new TextEncoder().encode(`${ip}|${ua}|${month}`);
  const hash = new Uint8Array(await crypto.subtle.digest("SHA-256", data));
  const n = (i) => ((hash[i] << 24) | (hash[i + 1] << 16) | (hash[i + 2] << 8) | hash[i + 3]) >>> 0;
  return `${n(0)}.${n(4)}`;
}

// Only real traffic to fluenticons.co counts: not previews, local development,
// or requests marked x-fluenticons-no-track (deploy checks, tests, and the /ai
// page's demo, which the page tracks itself as ai_demo_search).
const live = (request) =>
  new URL(request.url).hostname === "fluenticons.co" && !request.headers.has("x-fluenticons-no-track");
const clip = (v) => (typeof v === "string" ? v.slice(0, 100) : v);

// Sends one event. `context` is the Pages Functions context (for waitUntil).
export function track(context, name, params = {}) {
  const { request, env } = context;
  if (!live(request)) return;
  const clean = Object.fromEntries(
    Object.entries({ ...params, client_type: clientType(request.headers.get("user-agent")) })
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(([k, v]) => [k, clip(v)])
  );
  context.waitUntil(send(request, env, name, clean).catch(() => {}));
}

async function send(request, env, name, params) {
  const GA_ID = env?.AGENT_GA_ID || SITE_GA_ID;
  const cid = await clientId(request);
  // One GA session per client per day.
  const sid = String(Math.floor(Date.now() / 86400000));
  const page = new URL(request.url);
  if (env?.GA_API_SECRET) {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_ID}&api_secret=${encodeURIComponent(env.GA_API_SECRET)}`,
      {
        method: "POST",
        body: JSON.stringify({
          client_id: cid,
          events: [
            { name, params: { ...params, session_id: sid, engagement_time_msec: 1, page_location: `${page.origin}${page.pathname}` } },
          ],
        }),
      }
    );
    return;
  }
  const q = new URLSearchParams({
    v: "2",
    tid: GA_ID,
    cid,
    sid,
    sct: "1",
    seg: "1",
    _et: "1",
    en: name,
    dl: `${page.origin}${page.pathname}`,
    dt: "Fluent Icons API",
  });
  for (const [k, v] of Object.entries(params)) q.set(`${typeof v === "number" ? "epn" : "ep"}.${k}`, String(v));
  await fetch(`https://www.google-analytics.com/g/collect?${q}`, {
    method: "POST",
    headers: { "user-agent": "fluenticons-api" },
  });
}

// Recent searches per client, kept in this worker's memory for 30 minutes, so
// a lookup or code request for an icon a search just returned can be counted
// as agent_result_selected (query -> chosen icon). Best effort: a later
// request may land on another worker.
const recent = new Map();
const RECENT_MS = 30 * 60 * 1000;

export async function rememberResults(request, query, slugs) {
  if (!live(request)) return;
  const cid = await clientId(request);
  recent.delete(cid);
  recent.set(cid, { query, slugs, at: Date.now() });
  if (recent.size > 2000) recent.delete(recent.keys().next().value);
}

export async function trackSelection(context, slug, channel) {
  const { request } = context;
  if (!live(request)) return;
  const cid = await clientId(request);
  const last = recent.get(cid);
  if (!last || Date.now() - last.at > RECENT_MS) return;
  const rank = last.slugs.indexOf(slug);
  if (rank < 0) return;
  track(context, "agent_result_selected", { channel, search_term: last.query, icon: slug, rank: rank + 1 });
}
