#!/usr/bin/env node
// fluenticons: a small client for the Fluent Icons API (https://fluenticons.co/ai/).
// No dependencies; needs Node 18+ (built-in fetch).
const API = process.env.FLUENTICONS_API || "https://fluenticons.co/api/v1";
const VERSION = "0.1.0";

const HELP = `Find Microsoft Fluent UI icons without guessing names.

Usage:
  fluenticons search <words>          Best matching icons (React component names)
  fluenticons get <icon>              Styles, sizes and components for one icon
  fluenticons code <icon>             Code for one icon (default: React)
  fluenticons recommend "<a, b, c>"   One icon per UI item, as a consistent set

Options:
  --react              Print import lines (search)
  --json               Print the raw API response
  --limit <n>          Number of results (search, default 10)
  --style <style>      regular | filled | color | light
  --size <px>          16, 20, 24, 28, 32, 48…
  --platform <name>    react | svg | blazor | flutter | xaml | font | android | ios | powerapps

Examples:
  npx -y https://fluenticons.co/cli.tgz search "user security"
  npx -y https://fluenticons.co/cli.tgz search billing --react
  npx -y https://fluenticons.co/cli.tgz recommend "Home, Projects, Analytics, Billing, Settings"`;

const args = process.argv.slice(2);
const flags = {};
const words = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--react" || a === "--json" || a === "--help" || a === "-h") flags[a.replace(/^-+/, "")] = true;
  else if (a.startsWith("--")) flags[a.slice(2)] = args[++i];
  else words.push(a);
}
const [command, ...rest] = words;
const text = rest.join(" ");

async function call(path, init) {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { "user-agent": `fluenticons-cli/${VERSION}`, "content-type": "application/json", ...init?.headers },
  });
  const body = await res.json().catch(() => ({ error: { message: `HTTP ${res.status}` } }));
  if (!res.ok) {
    const suggestions = body.error?.suggestions?.length ? `\nDid you mean: ${body.error.suggestions.join(", ")}` : "";
    throw new Error(`${body.error?.message || `HTTP ${res.status}`}${suggestions}`);
  }
  return body;
}
const query = (o) => new URLSearchParams(Object.entries(o).filter(([, v]) => v !== undefined && v !== true)).toString();
const out = (s) => process.stdout.write(`${s}\n`);

async function main() {
  if (!command || flags.help || flags.h) return out(HELP);
  const common = { style: flags.style, size: flags.size };
  if (command === "search") {
    if (!text) throw new Error("Usage: fluenticons search <words>");
    const body = await call(`/icons/search?${query({ q: text, limit: flags.limit, ...common })}`);
    if (flags.json) return out(JSON.stringify(body, null, 2));
    if (!body.results.length) return out(body.hint || "No icons found.");
    for (const r of body.results) {
      if (!r.react) continue;
      out(flags.react ? r.react.import : r.react.component);
    }
    return;
  }
  if (command === "get") {
    if (!text) throw new Error("Usage: fluenticons get <icon>");
    const body = await call(`/icons/${encodeURIComponent(text)}?${query(common)}`);
    if (flags.json) return out(JSON.stringify(body, null, 2));
    out(`${body.displayName} (${body.name})`);
    for (const [style, sizes] of Object.entries(body.sizes)) out(`  ${style}: ${sizes.map((s) => `${s}px`).join(", ")}`);
    if (body.react.default) out(`\n${body.react.default.import}`);
    out(`\n${body.url}`);
    return;
  }
  if (command === "code") {
    if (!text) throw new Error("Usage: fluenticons code <icon> [--platform react]");
    const body = await call(`/icons/${encodeURIComponent(text)}/code?${query({ platform: flags.platform, ...common })}`);
    if (flags.json) return out(JSON.stringify(body, null, 2));
    if (body.note) out(`// ${body.note}`);
    return out(body.code);
  }
  if (command === "recommend") {
    const items = text.split(",").map((s) => s.trim()).filter(Boolean);
    if (!items.length) throw new Error('Usage: fluenticons recommend "Home, Projects, Billing"');
    const body = await call("/icons/recommend", {
      method: "POST",
      body: JSON.stringify({ items, style: flags.style, size: flags.size ? Number(flags.size) : undefined, platform: flags.platform }),
    });
    if (flags.json) return out(JSON.stringify(body, null, 2));
    const width = Math.max(...body.recommendations.map((r) => r.label.length));
    for (const r of body.recommendations) out(`${r.label.padEnd(width)}  ${r.component || "(no match)"}`);
    if (body.import) out(`\n${body.import}`);
    return;
  }
  throw new Error(`Unknown command "${command}". Run fluenticons --help.`);
}

main().catch((err) => {
  process.stderr.write(`fluenticons: ${err.message}\n`);
  process.exit(1);
});
