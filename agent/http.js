// The HTTP API (/api/v1/…), served by the Cloudflare Pages Function in
// functions/api/v1/[[path]].js. Only /api/* and /mcp run code (see
// public/_routes.json); every other URL is a static file as before.
import { InputError, LIMITS, about, getIcon, iconCode, recommendIcons, searchIcons, similarIcons } from "./tools.js";

export const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, OPTIONS",
  "access-control-allow-headers": "content-type, accept, mcp-protocol-version, mcp-session-id, last-event-id, x-fluenticons-no-track",
  "access-control-expose-headers": "retry-after, x-ratelimit-limit, x-ratelimit-remaining",
  "access-control-max-age": "86400",
};

export function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "x-robots-tag": "noindex",
      ...CORS,
      ...headers,
    },
  });
}
const error = (status, code, message, extra = {}) => json({ error: { code, message, ...extra } }, status);

// ---- Rate limiting ------------------------------------------------------------------
// Per IP address, in this worker's memory: generous for agents and people,
// enough to stop a runaway loop. (A Cloudflare rate limiting rule can be
// added in front of it without code changes.)
export const RATE_LIMIT = 120; // requests per minute
const windows = new Map();
export function rateLimit(request) {
  const ip = request.headers.get("cf-connecting-ip") || "local";
  const minute = Math.floor(Date.now() / 60000);
  let w = windows.get(ip);
  if (!w || w.minute !== minute) {
    w = { minute, count: 0 };
    windows.set(ip, w);
    if (windows.size > 10000) windows.delete(windows.keys().next().value);
  }
  w.count++;
  const remaining = Math.max(0, RATE_LIMIT - w.count);
  const headers = { "x-ratelimit-limit": String(RATE_LIMIT), "x-ratelimit-remaining": String(remaining) };
  if (w.count <= RATE_LIMIT) return { headers };
  const retry = String(60 - (Math.floor(Date.now() / 1000) % 60));
  return {
    headers,
    response: json(
      { error: { code: "rate_limited", message: `Too many requests: the limit is ${RATE_LIMIT} per minute. Try again in ${retry} seconds.`, retryAfter: Number(retry) } },
      429,
      { ...headers, "retry-after": retry }
    ),
  };
}

// Reads a JSON request body of at most `max` bytes.
export async function readJson(request, max = 16384) {
  const length = Number(request.headers.get("content-length") || 0);
  if (length > max) throw new InputError(`Request body must be at most ${max} bytes.`);
  const text = await request.text();
  if (text.length > max) throw new InputError(`Request body must be at most ${max} bytes.`);
  try {
    return JSON.parse(text || "{}");
  } catch {
    throw new InputError("Request body must be valid JSON.");
  }
}

// ---- Routes ---------------------------------------------------------------------------
const CACHE = "public, max-age=300";

export async function handleApi(context) {
  const { request } = context;
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/api\/v1\/?/, "").replace(/\/+$/, "");
  const parts = path ? path.split("/").map(decodeURIComponent) : [];
  const method = request.method === "HEAD" ? "GET" : request.method;

  if (!url.pathname.startsWith("/api/v1")) return error(404, "not_found", "Unknown endpoint. See https://fluenticons.co/api/v1");

  const limit = rateLimit(request);
  if (limit.response) return limit.response;
  const q = Object.fromEntries(url.searchParams);

  try {
    let result;
    if (!parts.length) {
      result = { status: 200, body: about };
    } else if (parts[0] !== "icons") {
      result = null;
    } else if (parts.length === 2 && parts[1] === "search" && (q.q || q.query)) {
      if (method !== "GET") return error(405, "method_not_allowed", "Use GET.");
      result = await searchIcons(q, context, "api");
    } else if (parts.length === 2 && parts[1] === "recommend") {
      if (method === "POST") result = await recommendIcons(await readJson(request), context, "api");
      else if (method === "GET") result = await recommendIcons(q, context, "api");
      else return error(405, "method_not_allowed", "Use POST (or GET with ?items=Home,Projects).");
    } else if (parts.length === 2 && parts[1] === "code" && (q.icon || q.icon_name || q.name)) {
      if (method !== "GET") return error(405, "method_not_allowed", "Use GET.");
      result = await iconCode(q, context, "api");
    } else if (parts.length === 2) {
      // Also /icons/search and /icons/code without their parameters: Fluent
      // has icons named "search" and "code".
      if (method !== "GET") return error(405, "method_not_allowed", "Use GET.");
      result = await getIcon({ ...q, icon_name: parts[1] }, context, "api");
    } else if (parts.length === 3 && parts[2] === "code") {
      if (method !== "GET") return error(405, "method_not_allowed", "Use GET.");
      result = await iconCode({ ...q, icon_name: parts[1] }, context, "api");
    } else if (parts.length === 3 && parts[2] === "similar") {
      if (method !== "GET") return error(405, "method_not_allowed", "Use GET.");
      result = await similarIcons({ ...q, icon_name: parts[1] }, context, "api");
    }
    if (!result) return error(404, "not_found", "Unknown endpoint. See https://fluenticons.co/api/v1", { endpoints: Object.keys(about.endpoints) });
    return json(result.body, result.status, { ...limit.headers, ...(result.status === 200 && method === "GET" && { "cache-control": CACHE }) });
  } catch (err) {
    if (err instanceof InputError) return error(400, "invalid_request", err.message, { limits: LIMITS });
    console.error(err);
    return error(500, "internal_error", "Something went wrong. Please try again.");
  }
}
