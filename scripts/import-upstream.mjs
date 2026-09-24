// Imports the 24px Filled/Regular icons and their metadata from a checkout of
// https://github.com/microsoft/fluentui-system-icons into public/icons and
// data/icons.json. Icons that were retired upstream but are already on the
// site are kept so existing /icons/*.svg links keep working.
//
// Usage (sparse checkout is enough):
//   git clone --depth 1 --filter=blob:none --sparse https://github.com/microsoft/fluentui-system-icons.git upstream
//   git -C upstream sparse-checkout set --no-cone '/assets/*/metadata.json' '/assets/*/SVG/*_24_filled.svg' '/assets/*/SVG/*_24_regular.svg'
//   node scripts/import-upstream.mjs upstream
import { readFileSync, writeFileSync, readdirSync, existsSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const upstream = process.argv[2];
if (!upstream) throw new Error("Usage: node scripts/import-upstream.mjs <path-to-fluentui-system-icons>");

const root = new URL("../", import.meta.url).pathname;
const iconsDir = join(root, "public/icons");
const dataFile = join(root, "data/icons.json");

// Some upstream metadata is UTF-8 that was decoded as Latin-1 ("â ï¸" for "⚠️").
// Repair it, then drop the warning sign, which only prefixes internal notes.
function cleanText(text) {
  let fixed = text;
  if (/[\u00c2-\u00f4][\u0080-\u00bf]/.test(text)) {
    const decoded = Buffer.from(text, "latin1").toString("utf8");
    if (!decoded.includes("\ufffd")) fixed = decoded;
  }
  return fixed.replace(/\u26a0\ufe0f?/g, " ").replace(/\s+/g, " ").trim();
}

const toStem = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
const titleCase = (stem) =>
  stem.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const icons = new Map();

const assetsDir = join(upstream, "assets");
for (const folder of readdirSync(assetsDir)) {
  const stem = toStem(folder);
  const svgDir = join(assetsDir, folder, "SVG");
  const file = (style) => `ic_fluent_${stem}_24_${style}.svg`;
  const has = (style) => existsSync(join(svgDir, file(style)));
  if (!has("filled") && !has("regular")) continue;

  let meta = {};
  const metaPath = join(assetsDir, folder, "metadata.json");
  if (existsSync(metaPath)) meta = JSON.parse(readFileSync(metaPath, "utf8"));

  for (const style of ["filled", "regular"]) {
    if (has(style)) copyFileSync(join(svgDir, file(style)), join(iconsDir, file(style)));
  }
  icons.set(stem, {
    slug: stem,
    name: cleanText(meta.name || folder),
    description: cleanText(meta.description || ""),
    keywords: [...new Set((meta.metaphor || []).map((k) => cleanText(k).toLowerCase()).filter(Boolean))],
    filled: has("filled") ? file("filled") : null,
    regular: has("regular") ? file("regular") : null,
  });
}

// Keep icons (and styles) the site already had that are no longer published upstream.
for (const f of readdirSync(iconsDir)) {
  const m = f.match(/^ic_fluent_(.+)_(\d+)_(filled|regular)\.svg$/);
  if (!m) continue;
  const stem = m[2] === "24" ? m[1] : `${m[1]}_${m[2]}`;
  const entry = icons.get(stem) || {
    slug: stem,
    name: titleCase(stem),
    description: "",
    keywords: [],
    filled: null,
    regular: null,
    legacy: true, // retired upstream; not in Microsoft's packages anymore
  };
  if (!entry[m[3]]) entry[m[3]] = f;
  icons.set(stem, entry);
}

const list = [...icons.values()].sort((a, b) => a.slug.localeCompare(b.slug));
writeFileSync(dataFile, JSON.stringify(list, null, 1) + "\n");
console.log(
  `data/icons.json: ${list.length} icons (${list.filter((i) => i.filled).length} filled, ${list.filter((i) => i.regular).length} regular)`
);
