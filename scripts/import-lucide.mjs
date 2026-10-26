// Imports Lucide (lucide.dev) into sites/lucide/data and
// sites/lucide/public/icons for the Lucide Icons site.
//
// - SVGs: lucide-static, one file per icon (aliases left out). Kept in
//   Lucide's own format (stroke settings on the <svg>), with currentColor
//   written as #212121 like the Fluent and Material files, so the shared code
//   recolors them the same way. See app/utils/svgBody.mjs for inline use.
// - Tags: lucide-static's tags.json. Categories: lucide.dev's API (several per
//   icon), with their titles from the Lucide repository at the same version.
// - Aliases (older names such as home → house): the package ships each alias
//   as a copy of its icon, so they're found by identical drawings.
// - Icon font code points: lucide-static's font/codepoints.json.
// - content/lucide-license.txt: the package's license, shown on /license/.
// - data/icons.json keeps each icon's "added" date across imports.
//
// Usage: node scripts/import-lucide.mjs <lucide-static version>
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync, existsSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { tmpdir } from "node:os";

const [version] = process.argv.slice(2);
if (!version) throw new Error("Usage: node scripts/import-lucide.mjs <lucide-static version>");

const site = new URL("../sites/lucide/", import.meta.url).pathname;
const iconsDir = join(site, "public/icons");
const dataFile = join(site, "data/icons.json");
mkdirSync(join(site, "data"), { recursive: true });
const today = new Date().toISOString().slice(0, 10);

// ---- Sources -----------------------------------------------------------------
const packDir = mkdtempSync(join(tmpdir(), "lucide-static-"));
process.on("exit", () => rmSync(packDir, { recursive: true, force: true }));
const pack = JSON.parse(
  execFileSync("npm", ["pack", `lucide-static@${version}`, "--json", "--pack-destination", packDir], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  })
)[0];
execFileSync("tar", ["-xzf", join(packDir, pack.filename), "-C", packDir]);
const pkg = join(packDir, "package");
const tags = JSON.parse(readFileSync(join(pkg, "tags.json"), "utf8"));
const codepoints = JSON.parse(readFileSync(join(pkg, "font/codepoints.json"), "utf8"));

const res = await fetch("https://lucide.dev/api/categories");
if (!res.ok) throw new Error(`lucide.dev categories: HTTP ${res.status}`);
const iconCategories = await res.json();
const categorySlugs = [...new Set(Object.values(iconCategories).flat())];
const categoryTitles = {};
await Promise.all(
  categorySlugs.map(async (slug) => {
    const r = await fetch(`https://cdn.jsdelivr.net/gh/lucide-icons/lucide@${version}/categories/${slug}.json`);
    const title = r.ok ? (await r.json()).title : "";
    categoryTitles[slug] = title || slug.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());
  })
);

// ---- SVGs ----------------------------------------------------------------------
// Lucide's markup on one line, without the license comment, currentColor → #212121.
function clean(svg) {
  return svg
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\s*class="[^"]*"/, "")
    .replace(/\s*\n\s*/g, " ")
    .replace(/\s*\/>/g, " />")
    .replace(/>\s+</g, "><")
    .replace(/"\s+>/g, '">')
    .replace(/currentColor/g, "#212121")
    .trim();
}
const inner = (svg) => svg.replace(/^<svg[^>]*>|<\/svg>$/g, "");

const names = Object.keys(tags).filter((n) => existsSync(join(pkg, `icons/${n}.svg`)));
const svgs = new Map(names.map((n) => [n, clean(readFileSync(join(pkg, `icons/${n}.svg`), "utf8"))]));
const byDrawing = new Map(names.map((n) => [inner(svgs.get(n)), n]));
const aliases = {};
for (const file of readdirSync(join(pkg, "icons"))) {
  const name = file.replace(/\.svg$/, "");
  if (!file.endsWith(".svg") || tags[name]) continue;
  const target = byDrawing.get(inner(clean(readFileSync(join(pkg, "icons", file), "utf8"))));
  if (target) (aliases[target] ||= []).push(name);
}

rmSync(iconsDir, { recursive: true, force: true });
mkdirSync(iconsDir, { recursive: true });
for (const [name, svg] of svgs) writeFileSync(join(iconsDir, `${name}.svg`), `${svg}\n`);

// ---- Data ----------------------------------------------------------------------
const titleCase = (name) =>
  name
    .split("-")
    .map((w) => (/^\d/.test(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
const previous = existsSync(dataFile) ? JSON.parse(readFileSync(dataFile, "utf8")) : [];
const prevBySlug = new Map(previous.map((i) => [i.slug, i]));

const list = names
  .sort((a, b) => a.localeCompare(b))
  .map((name) => {
    const slug = name.replace(/-/g, "_");
    const cats = (iconCategories[name] || []).map((c) => categoryTitles[c]);
    const entry = {
      slug,
      name: titleCase(name),
      description: "",
      keywords: [...new Set(tags[name].map((t) => t.toLowerCase()))],
      ...(cats.length && { category: cats[0], categories: cats }),
      ...(aliases[name] && { aliases: aliases[name].sort() }),
      ...(codepoints[name] && { codepoint: codepoints[name] }),
      regular: `${name}.svg`,
    };
    const prev = prevBySlug.get(slug);
    if (prev?.added) entry.added = prev.added;
    else if (!prev && previous.length) entry.added = today;
    return entry;
  });

// The license (ISC, plus MIT for icons that came from Feather), for /license/.
mkdirSync(join(site, "content"), { recursive: true });
writeFileSync(join(site, "content/lucide-license.txt"), readFileSync(join(pkg, "LICENSE"), "utf8"));
writeFileSync(dataFile, `[\n${list.map((i) => JSON.stringify(i)).join(",\n")}\n]\n`);
writeFileSync(
  join(site, "data/meta.json"),
  `${JSON.stringify({ svgPackage: "lucide-static", version, updated: today }, null, 2)}\n`
);
const added = list.filter((i) => i.added === today).map((i) => i.slug);
console.log(`icons: ${list.length}, aliases: ${Object.values(aliases).flat().length}, categories: ${categorySlugs.length}`);
console.log(`new icons: ${added.length}${added.length ? ` (${added.slice(0, 50).join(", ")}${added.length > 50 ? ", …" : ""})` : ""}`);
