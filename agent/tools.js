// The agent operations, shared by the HTTP API (agent/http.js) and the MCP
// server (agent/mcp.js): input checks, the icon logic in agent/icons.js, and
// analytics. Each returns { status, body }.
import {
  PLATFORMS,
  STYLES,
  code,
  details,
  findIcon,
  importLine,
  recommend,
  search,
  suggest,
  summary,
  versions,
} from "./icons.js";
import { rememberResults, track, trackSelection } from "./track.js";

export const LIMITS = { query: 200, results: 50, items: 25, label: 100, description: 300 };
const SIZES = [10, 12, 16, 20, 24, 28, 32, 48];

export class InputError extends Error {}
const fail = (message) => {
  throw new InputError(message);
};

function str(value, name, max, required = false) {
  if (value === undefined || value === null || value === "") {
    if (required) fail(`"${name}" is required.`);
    return undefined;
  }
  if (typeof value !== "string" && typeof value !== "number") fail(`"${name}" must be a string.`);
  const s = String(value).trim();
  if (required && !s) fail(`"${name}" is required.`);
  if (s.length > max) fail(`"${name}" must be at most ${max} characters.`);
  return s || undefined;
}
function style(value) {
  const s = str(value, "style", 10)?.toLowerCase();
  if (s && !STYLES.includes(s)) fail(`"style" must be one of: ${STYLES.join(", ")}.`);
  return s;
}
function size(value) {
  if (value === undefined || value === null || value === "") return undefined;
  const n = Number(value);
  if (!SIZES.includes(n)) fail(`"size" must be one of: ${SIZES.join(", ")}.`);
  return n;
}
function platform(value, fallback) {
  const p = str(value, "platform", 20)?.toLowerCase() || fallback;
  if (p && !PLATFORMS.includes(p)) fail(`"platform" must be one of: ${PLATFORMS.join(", ")}.`);
  return p;
}
function limit(value, fallback = 10) {
  if (value === undefined || value === null || value === "") return fallback;
  const n = Number(value);
  if (!Number.isInteger(n) || n < 1 || n > LIMITS.results) fail(`"limit" must be a whole number from 1 to ${LIMITS.results}.`);
  return n;
}
const bool = (value) => value === true || value === "true" || value === "1" || value === 1;

function notFound(name) {
  const suggestions = suggest(name);
  return {
    status: 404,
    body: {
      error: {
        code: "icon_not_found",
        message: `There is no Fluent icon named "${name}".${suggestions.length ? " Did you mean one of the suggestions?" : ""}`,
        suggestions,
      },
    },
  };
}

// ---- Operations -------------------------------------------------------------------

export async function searchIcons(args, context, channel) {
  const q = str(args.query ?? args.q, "query", LIMITS.query, true);
  const opts = {
    style: style(args.style),
    size: size(args.size),
    category: str(args.category, "category", 40),
    exact: bool(args.exact),
    limit: limit(args.limit),
  };
  const p = platform(args.platform);
  const hits = search(q, opts);
  const results = hits.map(({ icon, score }) => {
    const r = summary(icon, opts, score);
    if (p && p !== "react") {
      const c = code(icon, { platform: p, style: opts.style, size: opts.size });
      r.code = c.error ? null : c.code;
    }
    return r;
  });
  track(context, channel === "mcp" ? "mcp_search_icons" : "api_icon_search", {
    channel,
    search_term: q.toLowerCase(),
    result_count: results.length,
    top_icon: results[0]?.slug,
    style: opts.style,
    size: opts.size,
    platform: p,
  });
  await rememberResults(context.request, q.toLowerCase(), results.map((r) => r.slug));
  return {
    status: 200,
    body: {
      query: q,
      count: results.length,
      results,
      ...(!results.length && {
        hint: "No icons matched. Try a simpler or more literal word (\"lock\" rather than \"permissions\"), or drop the style/size filters.",
      }),
    },
  };
}

export async function getIcon(args, context, channel) {
  const name = str(args.icon_name ?? args.icon ?? args.name, "icon_name", LIMITS.label, true);
  const found = findIcon(name);
  if (!found) {
    track(context, channel === "mcp" ? "mcp_get_icon" : "api_icon_get", { channel, icon_query: name, found: 0 });
    return notFound(name);
  }
  const { icon } = found;
  track(context, channel === "mcp" ? "mcp_get_icon" : "api_icon_get", { channel, icon: icon.slug, found: 1 });
  await trackSelection(context, icon.slug, channel);
  const body = details(icon);
  // A requested style/size (or one in the name, like PersonLock20Filled) picks the default component.
  const st = style(args.style) || found.style;
  const sz = size(args.size) || found.size;
  if (st || sz) {
    const c = code(icon, { platform: "react", style: st, size: sz });
    if (c.error) return { status: 404, body: { error: { code: c.error, message: c.message, available: c.available } } };
    body.react.default = c.react;
  }
  return { status: 200, body };
}

export async function iconCode(args, context, channel) {
  const name = str(args.icon_name ?? args.icon ?? args.name, "icon_name", LIMITS.label, true);
  const p = platform(args.platform, "react");
  const found = findIcon(name);
  const event = channel === "mcp" ? "mcp_get_icon_code" : "api_code_request";
  if (!found) {
    track(context, event, { channel, icon_query: name, platform: p, found: 0 });
    return notFound(name);
  }
  const st = style(args.style) || found.style;
  const sz = size(args.size) || found.size;
  const result = code(found.icon, { platform: p, style: st, size: sz });
  track(context, event, { channel, icon: found.icon.slug, platform: p, style: result.style || st, size: result.size || sz, found: result.error ? 0 : 1 });
  if (result.error) {
    return { status: 404, body: { error: { code: result.error, message: result.message, available: result.available } } };
  }
  await trackSelection(context, found.icon.slug, channel);
  return { status: 200, body: result };
}

export async function recommendIcons(args, context, channel) {
  let items = args.items;
  if (typeof items === "string") items = items.split(",");
  if (!Array.isArray(items) || !items.length) fail('"items" must be a non-empty list of labels or { label, description } objects.');
  if (items.length > LIMITS.items) fail(`At most ${LIMITS.items} items per request.`);
  items = items.map((item, i) => {
    const obj = typeof item === "string" ? { label: item } : item || {};
    return {
      label: str(obj.label, `items[${i}].label`, LIMITS.label, true),
      description: str(obj.description, `items[${i}].description`, LIMITS.description),
    };
  });
  const opts = { style: style(args.style) || "regular", size: size(args.size) || 24 };
  const p = platform(args.platform, "react");
  const recommendations = recommend(items, opts);
  if (p !== "react") {
    for (const r of recommendations) {
      if (!r.slug) continue;
      const c = code(findIcon(r.slug).icon, { platform: p, ...opts });
      r.code = c.error ? null : c.code;
    }
  }
  track(context, channel === "mcp" ? "mcp_recommend_icons" : "api_recommend", {
    channel,
    item_count: items.length,
    // Labels only ("home, projects, billing"), never descriptions.
    labels: items.map((i) => i.label.toLowerCase()).join(", "),
    icons: recommendations.map((r) => r.slug || "-").join(", "),
    style: opts.style,
    size: opts.size,
    platform: p,
  });
  return {
    status: 200,
    body: {
      style: opts.style,
      size: opts.size,
      platform: p,
      recommendations,
      ...(p === "react" && { import: importLine(recommendations) }),
    },
  };
}

export async function similarIcons(args, context, channel) {
  const name = str(args.icon_name ?? args.icon ?? args.name, "icon_name", LIMITS.label, true);
  const found = findIcon(name);
  if (!found) return notFound(name);
  const n = limit(args.limit, 8);
  const d = details(found.icon);
  const seen = new Set([found.icon.slug, ...d.related.map((r) => r.slug)]);
  // Microsoft-keyword neighbours first, then icons sharing name words.
  const more = search(found.icon.name, { limit: n + 10 }).filter(({ icon }) => !seen.has(icon.slug));
  const results = [
    ...d.related.map((r) => summary(findIcon(r.slug).icon)),
    ...more.map(({ icon }) => summary(icon)),
  ].slice(0, n);
  track(context, `${channel}_find_similar`, { channel, icon: found.icon.slug, result_count: results.length });
  return { status: 200, body: { icon: found.icon.pascal, count: results.length, results } };
}

export const about = {
  name: "Fluent Icons API",
  description:
    "Free search, lookup and code for Microsoft's Fluent UI System Icons. Every name and React component returned exists in @fluentui/react-icons.",
  version: "1",
  source: { package: "@fluentui/svg-icons", version: versions.svgIcons, updated: versions.updated },
  docs: "https://fluenticons.co/ai/",
  mcp: "https://fluenticons.co/mcp",
  endpoints: {
    "GET /api/v1/icons/search?q=user+permissions": "Search by meaning. Optional: style, size, platform, limit (1–50), exact, category.",
    "GET /api/v1/icons/{icon}": "One icon: styles, sizes, component names, platforms, SVG URLs, related icons. {icon} can be PersonLock, person_lock or PersonLock24Regular.",
    "GET /api/v1/icons/{icon}/code?platform=react&style=regular&size=24": `Code for one variant. Platforms: ${PLATFORMS.join(", ")}.`,
    "GET /api/v1/icons/{icon}/similar": "Related icons.",
    "POST /api/v1/icons/recommend": 'A consistent icon set for UI items. Body: { "items": [{ "label": "Billing", "description": "invoices" }], "style": "regular", "size": 24 }. Also GET ?items=Home,Projects,Billing.',
  },
  styles: STYLES,
  sizes: SIZES,
  platforms: PLATFORMS,
  limits: { requestsPerMinute: 120, ...LIMITS },
};
