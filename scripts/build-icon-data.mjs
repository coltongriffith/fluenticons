// Builds everything the site renders from data/icons.json, public/icons/*.svg
// and content/guides/*.md. Run automatically by `yarn dev` / `yarn generate`.
//
// app/generated/
//   index.json        client search index: [slug, name, styles, keywords, filledFile?, regularFile?][]
//                     styles: 1 = filled, 2 = regular, 3 = both; file names only when non-standard
//   details.json      build-time only: { [slug]: { description, legacy, related, filled?, regular? } }
//                     where filled/regular = { file, size, body }
//   ui-icons.json     inner SVG markup for the site's own UI icons
//   guides.json       [{ slug, title, description, date, html }]
//   routes.json       every prerendered page path
//   public/sitemap.xml
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { marked } from "marked";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const outDir = new URL("app/generated/", root);
mkdirSync(new URL("public/", outDir), { recursive: true });
const write = (name, data) =>
  writeFileSync(new URL(name, outDir), typeof data === "string" ? data : JSON.stringify(data));

const SITE = "https://fluenticons.co";

function readSvg(file) {
  const svg = read(`public/icons/${file}`);
  const match = svg.match(/^<svg[^>]*\bwidth="(\d+)"[^>]*>([\s\S]*)<\/svg>\s*$/);
  if (!match) throw new Error(`Unexpected SVG format: ${file}`);
  return {
    file,
    size: Number(match[1]),
    body: match[2].trim().replace(/fill="#212121"/g, 'fill="currentColor"'),
  };
}

// ---- Icons ---------------------------------------------------------------
const icons = JSON.parse(read("data/icons.json"));
const defaultFile = (slug, style) => `ic_fluent_${slug}_24_${style}.svg`;

const index = icons.map((icon) => {
  const styles = (icon.filled ? 1 : 0) + (icon.regular ? 2 : 0);
  const row = [icon.slug, icon.name, styles, icon.keywords.join(" ")];
  const f = icon.filled && icon.filled !== defaultFile(icon.slug, "filled") ? icon.filled : 0;
  const r = icon.regular && icon.regular !== defaultFile(icon.slug, "regular") ? icon.regular : 0;
  if (f || r) row.push(f, r);
  return row;
});

// Related icons: shared name words and keywords.
const nameTokens = icons.map((i) => new Set(i.name.toLowerCase().split(/\s+/)));
const keywordSets = icons.map((i) => new Set(i.keywords));
function related(i) {
  const scores = [];
  icons.forEach((other, j) => {
    if (i === j) return;
    let score = 0;
    for (const t of nameTokens[i]) if (nameTokens[j].has(t)) score += 3;
    for (const k of keywordSets[i]) if (keywordSets[j].has(k)) score += 1;
    if (score) scores.push([score, other.slug]);
  });
  return scores
    .sort((a, b) => b[0] - a[0] || a[1].localeCompare(b[1]))
    .slice(0, 12)
    .map(([, slug]) => slug);
}

const details = {};
icons.forEach((icon, i) => {
  details[icon.slug] = {
    description: icon.description,
    legacy: Boolean(icon.legacy),
    related: related(i),
    ...(icon.filled && { filled: readSvg(icon.filled) }),
    ...(icon.regular && { regular: readSvg(icon.regular) }),
  };
});

write("index.json", index);
write("details.json", details);
console.log(`icons: ${icons.length}`);

// ---- UI icons ------------------------------------------------------------
const uiIcons = [
  "search_24_filled",
  "position_backward_24_filled",
  "weather_sunny_24_regular",
  "weather_moon_24_regular",
  "heart_24_regular",
  "heart_24_filled",
  "copy_24_regular",
  "arrow_download_24_regular",
  "folder_24_regular",
  "chevron_down_24_regular",
  "balloon_24_regular",
  "sticker_24_regular",
  "dismiss_24_regular",
  "open_24_regular",
];
write(
  "ui-icons.json",
  Object.fromEntries(uiIcons.map((key) => [key, readSvg(`ic_fluent_${key}.svg`).body]))
);

// ---- Guides --------------------------------------------------------------
function parseFrontMatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Guide is missing front matter");
  const meta = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const i = line.indexOf(":");
      return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^"|"$/g, "")];
    })
  );
  return { meta, body: match[2] };
}

const guidesDir = new URL("content/guides/", root);
const guides = existsSync(guidesDir)
  ? readdirSync(guidesDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        const { meta, body } = parseFrontMatter(readFileSync(new URL(f, guidesDir), "utf8"));
        return {
          slug: f.replace(/\.md$/, ""),
          title: meta.title,
          description: meta.description,
          date: meta.date,
          order: Number(meta.order || 99),
          html: marked.parse(body),
        };
      })
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))
  : [];
write("guides.json", guides);
console.log(`guides: ${guides.length}`);

// ---- Routes + sitemap ----------------------------------------------------
function letterOf(name) {
  const c = name.charAt(0).toLowerCase();
  return /[a-z]/.test(c) ? c : "0-9";
}
const letters = [...new Set(icons.map((i) => letterOf(i.name)))].sort();

const indexable = [
  "/",
  "/outlined",
  "/browse",
  ...letters.map((l) => `/browse/${l}`),
  ...icons.map((i) => `/icon/${i.slug.replace(/_/g, "-")}`),
  "/guides",
  ...guides.map((g) => `/guides/${g.slug}`),
  "/about",
  "/contact",
  "/license",
  "/terms",
  "/privacy-policy",
];
write("routes.json", [...indexable, "/favorites"]);

const url = (path) => `${SITE}${path === "/" ? "/" : `${path}/`}`;
write(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
    .map((p) => `  <url><loc>${url(p)}</loc></url>`)
    .join("\n")}\n</urlset>\n`
);
console.log(`routes: ${indexable.length + 1}`);
