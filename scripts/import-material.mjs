// Imports Google's Material Symbols into sites/material/data and
// sites/material/public/icons for the Material Icons site.
//
// - SVGs: @material-symbols/svg-400 (Outlined, weight 400, fill 0 and 1),
//   redrawn on a 24×24 viewBox in the same format as the Fluent files
//   (root fill="none", path fill="#212121") so the shared code treats them
//   alike. Rounded, Sharp and other weights load from jsDelivr on icon pages.
// - Names, categories, tags and popularity: Google Fonts' icon metadata.
// - Flutter names: the material_symbols_icons package on pub.dev (its own
//   renames, e.g. "10k" → Symbols.ten_k, "class" → Symbols.class_).
// - data/icons.json keeps each design's "added" date across imports.
//
// Usage: node scripts/import-material.mjs <@material-symbols/svg-400 version>
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync, existsSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { tmpdir } from "node:os";

const [version] = process.argv.slice(2);
if (!version) throw new Error("Usage: node scripts/import-material.mjs <@material-symbols/svg-400 version>");

const site = new URL("../sites/material/", import.meta.url).pathname;
const iconsDir = join(site, "public/icons");
const dataFile = join(site, "data/icons.json");
mkdirSync(iconsDir, { recursive: true });
mkdirSync(join(site, "data"), { recursive: true });
const today = new Date().toISOString().slice(0, 10);

// ---- Sources -----------------------------------------------------------------
const packDir = mkdtempSync(join(tmpdir(), "material-symbols-"));
process.on("exit", () => rmSync(packDir, { recursive: true, force: true }));
const pack = JSON.parse(
  execFileSync("npm", ["pack", `@material-symbols/svg-400@${version}`, "--json", "--pack-destination", packDir], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  })
)[0];
execFileSync("tar", ["-xzf", join(packDir, pack.filename), "-C", packDir]);
const svgDir = join(packDir, "package/outlined");

const res = await fetch("https://fonts.google.com/metadata/icons?incomplete=1&key=material_symbols");
if (!res.ok) throw new Error(`Google Fonts metadata: HTTP ${res.status}`);
const metadata = JSON.parse((await res.text()).replace(/^\)\]\}'/, ""));
const described = metadata.icons.filter(
  (i) => !i.unsupported_families.includes("Material Symbols Outlined") && existsSync(join(svgDir, `${i.name}.svg`))
);
// Every symbol in the package is imported. If Google's metadata hasn't caught
// up with a new release yet, a symbol gets its name from the file and no
// keywords; meta.json records how many, and the weekly job re-imports the
// same version until the metadata covers them.
const describedNames = new Set(described.map((i) => i.name));
const undescribed = readdirSync(svgDir)
  .filter((f) => f.endsWith(".svg") && !f.endsWith("-fill.svg"))
  .map((f) => f.slice(0, -4))
  .filter((name) => !describedNames.has(name))
  .map((name) => ({ name, popularity: 0, codepoint: 0, categories: [], tags: [] }));
const symbols = [...described, ...undescribed];

// Flutter: Symbols.<name> in the material_symbols_icons package.
const flutterNames = new Map();
let flutterLoaded = false;
try {
  const pub = await (await fetch("https://pub.dev/api/packages/material_symbols_icons")).json();
  const archive = join(packDir, "flutter.tgz");
  writeFileSync(archive, Buffer.from(await (await fetch(pub.latest.archive_url)).arrayBuffer()));
  execFileSync("tar", ["-xzf", archive, "-C", packDir, "lib/symbols.dart", "lib/symbols_map.dart"]);
  const declared = new Set(
    readFileSync(join(packDir, "lib/symbols.dart"), "utf8").match(/(?<=static const IconData )\w+/g)
  );
  const renames = Object.fromEntries(
    [...readFileSync(join(packDir, "lib/symbols_map.dart"), "utf8").matchAll(/'(\w+)': '(\w+)'/g)].map((m) => [m[1], m[2]])
  );
  for (const s of symbols) {
    const name = renames[s.name] || s.name;
    if (declared.has(name)) flutterNames.set(s.name, name);
  }
  flutterLoaded = true;
  console.log(`Flutter: material_symbols_icons ${pub.latest.version}, ${flutterNames.size} names`);
} catch (err) {
  console.warn(`Flutter names not updated (keeping the previous ones): ${err.message}`);
}

// ---- 960-unit paths → 24×24 ----------------------------------------------------
// Material Symbols are drawn in viewBox="0 -960 960 960". Scale by 24/960 and
// shift y by +960. Coordinates are rounded as absolute positions (relative
// commands are re-derived from the rounded points), so rounding never drifts.
const S = 24 / 960;
const round = (n) => Math.round(n * 1000) / 1000;
const fmt = (n) => {
  const s = String(round(n) || 0);
  return s.replace(/^(-?)0\./, "$1.");
};
const ARGS = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 };

function transformPath(d) {
  const tokens = d.match(/[a-zA-Z]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?/g);
  let i = 0;
  let out = "";
  // Current point and subpath start: original (x, y) and rounded output (X, Y).
  let x = 0, y = 0, X = 0, Y = 0, sx = 0, sy = 0, SX = 0, SY = 0;
  let cmd = null;
  const num = () => Number(tokens[i++]);
  const flag = () => {
    // Arc flags may be packed ("011"); take one digit at a time.
    const t = tokens[i];
    if (t.length > 1 && /^[01]/.test(t)) {
      tokens[i] = t.slice(1);
      return Number(t[0]);
    }
    i++;
    return Number(t);
  };
  const tx = (ox) => ox * S;
  const ty = (oy) => (oy + 960) * S;
  while (i < tokens.length) {
    if (/[a-zA-Z]/.test(tokens[i])) cmd = tokens[i++];
    else if (!cmd) throw new Error(`Bad path: ${d}`);
    const lower = cmd.toLowerCase();
    const rel = cmd === lower;
    out += cmd;
    if (lower === "z") {
      x = sx, y = sy, X = SX, Y = SY;
      continue;
    }
    // Repeat the command while numbers follow.
    let first = true;
    let movePair = lower === "m"; // only a moveto's first pair starts a subpath
    do {
      if (!first) out += " ";
      first = false;
      const parts = [];
      // Point helper: returns output text for an (ox, oy) given in original
      // absolute coordinates, relative to the rounded current point if needed.
      const point = (ax, ay) => {
        const PX = round(tx(ax)), PY = round(ty(ay));
        return rel ? [fmt(PX - X), fmt(PY - Y), PX, PY] : [fmt(PX), fmt(PY), PX, PY];
      };
      if (lower === "h") {
        const ax = rel ? x + num() : num();
        const PX = round(tx(ax));
        parts.push(rel ? fmt(PX - X) : fmt(PX));
        x = ax, X = PX;
      } else if (lower === "v") {
        const ay = rel ? y + num() : num();
        const PY = round(ty(ay));
        parts.push(rel ? fmt(PY - Y) : fmt(PY));
        y = ay, Y = PY;
      } else if (lower === "a") {
        const rx = num(), ry = num(), rot = num(), large = flag(), sweep = flag();
        const ax = rel ? x + num() : num(), ay = rel ? y + num() : num();
        const [a, b, PX, PY] = point(ax, ay);
        parts.push(fmt(rx * S), fmt(ry * S), fmt(rot), large, sweep, a, b);
        x = ax, y = ay, X = PX, Y = PY;
      } else {
        const n = ARGS[lower];
        const coords = [];
        for (let k = 0; k < n; k += 2) {
          const ax = rel ? x + num() : num(), ay = rel ? y + num() : num();
          coords.push([ax, ay]);
        }
        let last;
        for (const [ax, ay] of coords) {
          last = point(ax, ay);
          parts.push(last[0], last[1]);
        }
        const [ax, ay] = coords[coords.length - 1];
        x = ax, y = ay, X = last[2], Y = last[3];
        if (movePair) {
          sx = x, sy = y, SX = X, SY = Y;
          movePair = false;
        }
      }
      out += parts.join(" ");
    } while (i < tokens.length && !/[a-zA-Z]/.test(tokens[i]));
  }
  return out.replace(/ -/g, "-");
}

function convert(file) {
  const svg = readFileSync(join(svgDir, file), "utf8");
  const paths = [...svg.matchAll(/<path d="([^"]+)"\/>/g)].map((m) => m[1]);
  if (!paths.length || !svg.includes('viewBox="0 -960 960 960"')) throw new Error(`Unexpected SVG: ${file}`);
  return (
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n` +
    paths.map((d) => `<path d="${transformPath(d)}" fill="#212121"/>`).join("\n") +
    `\n</svg>\n`
  );
}

// ---- Designs -----------------------------------------------------------------
const titleCase = (name) =>
  name
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
const tagCount = {};
for (const s of symbols) for (const t of s.tags) tagCount[t] = (tagCount[t] || 0) + 1;
// Google's tags include design-tool words on almost every icon; keep the
// topical ones. Categories ("UI actions") become keywords too.
const GENERIC = new Set(
  "app application button components design filled geometry interface layout outline shape solid stroke symbol ui ux web website screen window".split(" ")
);
const keywordsFor = (s) => {
  const nameWords = new Set(s.name.split("_"));
  const category = s.categories.map((c) => c.toLowerCase().replace(/&/g, " and ").replace(/\s+/g, " ").trim());
  const tags = s.tags
    .filter((t) => /^[a-z0-9]+(?: [a-z0-9]+)*$/.test(t) && !GENERIC.has(t) && !nameWords.has(t) && tagCount[t] <= 400)
    .sort((a, b) => tagCount[b] - tagCount[a] || a.localeCompare(b))
    .slice(0, 12);
  return [...new Set([...category, ...tags])];
};

const previous = existsSync(dataFile) ? JSON.parse(readFileSync(dataFile, "utf8")) : [];
const previousBySlug = new Map(previous.map((e) => [e.slug, e]));

const keep = new Set();
const list = symbols
  .sort((a, b) => b.popularity - a.popularity || a.name.localeCompare(b.name))
  .map((s) => {
    for (const [style, file] of [["regular", `${s.name}.svg`], ["filled", `${s.name}-fill.svg`]]) {
      writeFileSync(join(iconsDir, file), convert(file));
      keep.add(file);
    }
    const prev = previousBySlug.get(s.name);
    const entry = {
      slug: s.name,
      name: titleCase(s.name),
      description: "",
      keywords: keywordsFor(s),
      category: s.categories[0] || "",
      popularity: s.popularity,
      codepoint: s.codepoint,
      ...(flutterLoaded
        ? flutterNames.has(s.name) && { flutter: flutterNames.get(s.name) }
        : previousBySlug.get(s.name)?.flutter && { flutter: previousBySlug.get(s.name).flutter }),
      filled: `${s.name}-fill.svg`,
      regular: `${s.name}.svg`,
    };
    if (prev?.added) entry.added = prev.added;
    else if (!prev && previous.length) entry.added = today;
    return entry;
  });

// Symbols Google removed: drop their files (Material Symbols are renamed or
// merged upstream rather than retired, so there's nothing to keep).
const removed = previous.filter((e) => !list.some((i) => i.slug === e.slug)).map((e) => e.slug);
for (const f of readdirSync(iconsDir)) if (!keep.has(f)) rmSync(join(iconsDir, f));

writeFileSync(dataFile, `[\n${list.map((i) => JSON.stringify(i)).join(",\n")}\n]\n`);
writeFileSync(
  join(site, "data/meta.json"),
  JSON.stringify(
    {
      svgPackage: "@material-symbols/svg-400",
      version,
      updated: today,
      ...(undescribed.length && { missingMetadata: undescribed.length }),
    },
    null,
    2
  ) + "\n"
);

const added = list.filter((i) => i.added === today).map((i) => i.slug);
console.log(`data/icons.json: ${list.length} symbols (${keep.size} SVG files)`);
if (undescribed.length) {
  console.log(`not in Google's metadata yet (named from their files): ${undescribed.map((s) => s.name).join(", ")}`);
}
console.log(`new symbols: ${added.length}${added.length ? ` (${added.slice(0, 50).join(", ")}${added.length > 50 ? ", …" : ""})` : ""}`);
if (removed.length) console.log(`removed upstream: ${removed.join(", ")}`);
