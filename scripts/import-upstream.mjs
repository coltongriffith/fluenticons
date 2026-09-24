// Imports Microsoft's Fluent UI System Icons into data/ and public/icons.
//
// - data/icons.json: one entry per design (name, keywords, description), its
//   local files in public/icons, and every size/style variant published
//   in the @fluentui/svg-icons npm package (served on the site from jsDelivr),
//   with its icon-font codepoint and whether Flutter ships it.
// - data/meta.json: the package version and upstream commit the data matches.
// - public/icons: one file per design and style (filled, regular, color; light
//   only for Light-only designs), 24px when Microsoft draws it, otherwise the
//   nearest size. Other sizes and the Light style load from jsDelivr on icon
//   pages only.
// Designs retired upstream stay (marked legacy) so existing links keep working.
//
// Usage (a sparse checkout is enough):
//   git clone --depth 1 --filter=blob:none --sparse https://github.com/microsoft/fluentui-system-icons.git upstream
//   git -C upstream sparse-checkout set --no-cone '/assets/*/metadata.json' \
//     '/assets/*/SVG/*_24_filled.svg' '/assets/*/SVG/*_24_regular.svg' \
//     '/fonts/*.json' '/flutter/lib/src/fluent_icons.dart'
//   node scripts/import-upstream.mjs upstream 1.1.341   # @fluentui/svg-icons version
import { readFileSync, writeFileSync, readdirSync, existsSync, copyFileSync, mkdtempSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { tmpdir } from "node:os";

const [upstream, svgIconsVersion] = process.argv.slice(2);
if (!upstream || !svgIconsVersion) {
  throw new Error("Usage: node scripts/import-upstream.mjs <path-to-fluentui-system-icons> <@fluentui/svg-icons version>");
}

const root = new URL("../", import.meta.url).pathname;
const iconsDir = join(root, "public/icons");
const STYLES = ["filled", "regular", "color", "light"];
const today = new Date().toISOString().slice(0, 10);

// The data from the last import: keeps retired designs' slugs and each
// design's "added" date (when it first appeared on the site).
const previousList = existsSync(join(root, "data/icons.json"))
  ? JSON.parse(readFileSync(join(root, "data/icons.json"), "utf8"))
  : [];

// Some upstream metadata is UTF-8 that was decoded as Latin-1 ("â ï¸" for "⚠️").
// Repair it, then drop the warning sign, which only prefixes internal notes.
function cleanText(text) {
  let fixed = text;
  if (/[Â-ô][\u0080-¿]/.test(text)) {
    const decoded = Buffer.from(text, "latin1").toString("utf8");
    if (!decoded.includes("�")) fixed = decoded;
  }
  return fixed.replace(/⚠️?/g, " ").replace(/\s+/g, " ").trim();
}

const toStem = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
const titleCase = (stem) =>
  stem.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

// ---- Variants published in @fluentui/svg-icons ---------------------------
const packDir = mkdtempSync(join(tmpdir(), "svg-icons-"));
const pack = JSON.parse(
  execFileSync("npm", ["pack", `@fluentui/svg-icons@${svgIconsVersion}`, "--json", "--pack-destination", packDir], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  })
)[0];
execFileSync("tar", ["-xzf", join(packDir, pack.filename), "-C", packDir]);
process.on("exit", () => rmSync(packDir, { recursive: true, force: true }));
const packageVariants = new Map(); // stem -> { style -> Set(size) }
for (const { path } of pack.files) {
  // Localized and direction-specific variants (e.g. "ar/…", "RTL/…") are skipped.
  const m = path.match(/^icons\/([a-z0-9_]+)_(\d+)_(filled|regular|color|light)\.svg$/);
  if (!m) continue;
  const [, stem, size, style] = m;
  if (!packageVariants.has(stem)) packageVariants.set(stem, {});
  (packageVariants.get(stem)[style] ||= new Set()).add(Number(size));
}

// ---- Icon fonts and Flutter ------------------------------------------------
const codepoints = {};
for (const [style, font] of [["filled", "Filled"], ["regular", "Regular"], ["light", "Light"]]) {
  const map = JSON.parse(readFileSync(join(upstream, `fonts/FluentSystemIcons-${font}.json`), "utf8"));
  for (const [name, cp] of Object.entries(map)) {
    if (name.endsWith(`_${style}`)) codepoints[name.replace(/^ic_fluent_/, "")] = cp;
  }
}
const flutter = new Set(
  readFileSync(join(upstream, "flutter/lib/src/fluent_icons.dart"), "utf8").match(
    /(?<=static const IconData )\w+(?= =)/g
  )
);

function variantsFor(stem) {
  const styles = packageVariants.get(stem);
  if (!styles) return undefined;
  const out = {};
  for (const style of STYLES) {
    if (!styles[style]) continue;
    // [size, icon-font codepoint (0 = not in a font), in Flutter package (1/0)]
    out[style] = [...styles[style]]
      .sort((a, b) => a - b)
      .map((size) => {
        const key = `${stem}_${size}_${style}`;
        return [size, codepoints[key] || 0, flutter.has(key) ? 1 : 0];
      });
  }
  return out;
}

// Copies a package SVG into public/icons in the same format as Microsoft's
// asset files (root fill="none", paths fill="#212121"), so the site treats
// every local file alike. Color icons keep their own fills.
const SIZE_PREFERENCE = [24, 20, 28, 16, 32, 48, 12, 10];
function copyFromPackage(stem, style, variants) {
  const sizes = (variants?.[style] || []).map(([size]) => size);
  const size = SIZE_PREFERENCE.find((s) => sizes.includes(s));
  if (!size) return null;
  const file = `ic_fluent_${stem}_${size}_${style}.svg`;
  let svg = readFileSync(join(packDir, "package/icons", `${stem}_${size}_${style}.svg`), "utf8").trim();
  if (style !== "color") {
    const [, attrs, body] = svg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>$/);
    const attr = (name) => attrs.match(new RegExp(`\\b${name}="([^"]*)"`))[1];
    svg =
      `<svg width="${attr("width")}" height="${attr("height")}" viewBox="${attr("viewBox")}" fill="none" xmlns="http://www.w3.org/2000/svg">\n` +
      body.replace(/<path(?![^>]*\bfill=)/g, '<path fill="#212121"') +
      "\n</svg>\n";
  }
  writeFileSync(join(iconsDir, file), svg);
  return file;
}

// ---- Designs ---------------------------------------------------------------
const icons = new Map();
const assetsDir = join(upstream, "assets");
for (const folder of readdirSync(assetsDir)) {
  const stem = toStem(folder);
  const svgDir = join(assetsDir, folder, "SVG");
  const file = (style) => `ic_fluent_${stem}_24_${style}.svg`;
  const has = (style) => existsSync(join(svgDir, file(style)));
  const variants = variantsFor(stem);
  if (!has("filled") && !has("regular") && !variants) continue;

  let meta = {};
  const metaPath = join(assetsDir, folder, "metadata.json");
  if (existsSync(metaPath)) meta = JSON.parse(readFileSync(metaPath, "utf8"));

  for (const style of ["filled", "regular"]) {
    if (has(style)) copyFileSync(join(svgDir, file(style)), join(iconsDir, file(style)));
  }
  const filled = has("filled") ? file("filled") : copyFromPackage(stem, "filled", variants);
  const regular = has("regular") ? file("regular") : copyFromPackage(stem, "regular", variants);
  const color = copyFromPackage(stem, "color", variants);
  // Light-only designs keep a Light file so every design has something to show.
  const light = !filled && !regular && !color && copyFromPackage(stem, "light", variants);
  icons.set(stem, {
    slug: stem,
    name: cleanText(meta.name || folder),
    description: cleanText(meta.description || ""),
    keywords: [...new Set((meta.metaphor || []).map((k) => cleanText(k).toLowerCase()).filter(Boolean))],
    filled,
    regular,
    ...(color && { color }),
    ...(light && { light }),
    ...(variants && { variants }),
  });
}

// Designs in the package without a matching asset folder.
for (const stem of packageVariants.keys()) {
  if (icons.has(stem)) continue;
  const variants = variantsFor(stem);
  const filled = copyFromPackage(stem, "filled", variants);
  const regular = copyFromPackage(stem, "regular", variants);
  const color = copyFromPackage(stem, "color", variants);
  const light = !filled && !regular && !color && copyFromPackage(stem, "light", variants);
  icons.set(stem, {
    slug: stem,
    name: titleCase(stem),
    description: "",
    keywords: [],
    filled,
    regular,
    ...(color && { color }),
    ...(light && { light }),
    variants,
  });
}

// Keep icons (and styles) the site already had that are no longer published upstream.
// The previous data says which design each file belonged to (a file like
// ic_fluent_x_20_filled.svg can be design "x"), so retired designs keep their
// slug, name and keywords.
const previous = new Map();
for (const entry of previousList) {
  for (const style of ["filled", "regular", "color", "light"]) if (entry[style]) previous.set(entry[style], entry);
}
const used = new Set([...icons.values()].flatMap((i) => [i.filled, i.regular, i.color, i.light]));
for (const f of readdirSync(iconsDir)) {
  const m = f.match(/^ic_fluent_(.+)_(\d+)_(filled|regular|color|light)\.svg$/);
  if (!m || used.has(f)) continue;
  const prev = previous.get(f);
  const stem = prev?.slug || (m[2] === "24" ? m[1] : `${m[1]}_${m[2]}`);
  const entry = icons.get(stem) || {
    slug: stem,
    name: prev?.name || titleCase(stem),
    description: prev?.description || "",
    keywords: prev?.keywords || [],
    filled: null,
    regular: null,
    legacy: true, // retired upstream; not in Microsoft's packages anymore
  };
  if (!entry[m[3]]) entry[m[3]] = f;
  icons.set(stem, entry);
}

// "added": the import a design first appeared in (shown on /new/).
const previousBySlug = new Map(previousList.map((e) => [e.slug, e]));
for (const entry of icons.values()) {
  const prev = previousBySlug.get(entry.slug);
  if (prev?.added) entry.added = prev.added;
  else if (!prev && previousList.length) entry.added = today;
}

const list = [...icons.values()].sort((a, b) => a.slug.localeCompare(b.slug));
// One design per line keeps diffs readable.
writeFileSync(join(root, "data/icons.json"), `[\n${list.map((i) => JSON.stringify(i)).join(",\n")}\n]\n`);

const upstreamCommit = execFileSync("git", ["-C", upstream, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
writeFileSync(
  join(root, "data/meta.json"),
  JSON.stringify(
    { svgIcons: svgIconsVersion, upstreamCommit, updated: today },
    null,
    2
  ) + "\n"
);

const variantCount = list.reduce(
  (n, i) => n + Object.values(i.variants || {}).reduce((m, v) => m + v.length, 0),
  0
);
const added = list.filter((i) => i.added === today).map((i) => i.slug);
const removed = previousList.filter((e) => !icons.has(e.slug)).map((e) => e.slug);
console.log(`data/icons.json: ${list.length} designs, ${variantCount} variants`);
const sample = added.slice(0, 50).join(", ") + (added.length > 50 ? ", …" : "");
console.log(`new designs: ${added.length}${added.length ? ` (${sample})` : ""}`);
if (removed.length) console.log(`no longer in the data: ${removed.join(", ")}`);
