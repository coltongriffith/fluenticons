// Builds everything the site renders from data/icons.json, data/meta.json,
// public/icons/*.svg and content/guides/*.md. Run automatically by
// `yarn dev` / `yarn generate`.
//
// app/generated/
//   index.json        client search index: [slug, name, styles, keywords (comma-separated), filledFile?, regularFile?, previewFile?][]
//                     styles: 1 = filled, 2 = regular, 3 = both; file names only when non-standard;
//                     previewFile only for designs with neither (a Color or Light file)
//   details.json      build-time only: { [slug]: { description, legacy, related, variants,
//                     filled?, regular?, color?, light? } } where each style = { file, size, body? }
//   color.json        [slug, name, file][] for designs with a Color style
//   tags.json         { [tag]: { name, slugs } } for keywords shared by enough icons
//   stats.json        counts used in page copy, and the @fluentui/svg-icons version
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

function readSvg(file, { body = true } = {}) {
  const svg = read(`public/icons/${file}`);
  const match = svg.match(/^<svg[^>]*\bwidth="(\d+)"[^>]*>([\s\S]*)<\/svg>\s*$/);
  if (!match) throw new Error(`Unexpected SVG format: ${file}`);
  return {
    file,
    size: Number(match[1]),
    ...(body && { body: match[2].trim().replace(/fill="#212121"/g, 'fill="currentColor"') }),
  };
}

// ---- Icons ---------------------------------------------------------------
const icons = JSON.parse(read("data/icons.json"));
const meta = JSON.parse(read("data/meta.json"));
const defaultFile = (slug, style) => `ic_fluent_${slug}_24_${style}.svg`;

const index = icons.map((icon) => {
  const styles = (icon.filled ? 1 : 0) + (icon.regular ? 2 : 0);
  const row = [icon.slug, icon.name, styles, icon.keywords.join(",")];
  const f = icon.filled && icon.filled !== defaultFile(icon.slug, "filled") ? icon.filled : 0;
  const r = icon.regular && icon.regular !== defaultFile(icon.slug, "regular") ? icon.regular : 0;
  if (f || r) row.push(f, r);
  // Designs with only Color or Light styles: a file to show in A–Z lists.
  if (!styles && (icon.color || icon.light)) row.push(0, 0, icon.color || icon.light);
  return row;
});

// Related icons: shared name words (and name words used as keywords) count
// most, then shared keywords. Icons next to each other alphabetically fill
// any remaining places so every page links to 12 others.
const RELATED = 12;
const nameTokens = icons.map((i) => new Set(i.name.toLowerCase().split(/\s+/)));
const keywordSets = icons.map((i) => new Set(i.keywords));
const listed = icons.map((i) => Boolean(i.filled || i.regular));
function related(i) {
  const scores = [];
  icons.forEach((other, j) => {
    if (i === j || !listed[j]) return;
    let score = 0;
    for (const t of nameTokens[i]) {
      if (nameTokens[j].has(t)) score += 3;
      else if (keywordSets[j].has(t)) score += 1;
    }
    for (const k of keywordSets[i]) if (keywordSets[j].has(k)) score += 1;
    if (icons[j].legacy) score -= 0.5;
    if (score > 0) scores.push([score, other.slug]);
  });
  const slugs = scores
    .sort((a, b) => b[0] - a[0] || a[1].localeCompare(b[1]))
    .slice(0, RELATED)
    .map(([, slug]) => slug);
  for (let d = 1; slugs.length < RELATED && d < icons.length; d++) {
    for (const j of [i - d, i + d]) {
      if (slugs.length < RELATED && listed[j] && !slugs.includes(icons[j].slug)) slugs.push(icons[j].slug);
    }
  }
  return slugs;
}

const details = {};
icons.forEach((icon, i) => {
  details[icon.slug] = {
    description: icon.description,
    legacy: Boolean(icon.legacy),
    related: related(i),
    variants: icon.variants || {},
    ...(icon.filled && { filled: readSvg(icon.filled) }),
    ...(icon.regular && { regular: readSvg(icon.regular) }),
    // Color icons are shown as images; only the file and size are needed.
    ...(icon.color && { color: readSvg(icon.color, { body: false }) }),
    ...(icon.light && { light: readSvg(icon.light) }),
  };
});

const colorIcons = icons.filter((i) => i.color).map((i) => [i.slug, i.name, i.color]);

// Tag pages: keywords that at least TAG_MIN listed icons share.
const TAG_MIN = 10;
const tagSlug = (keyword) => keyword.replace(/\s+/g, "-");
const tagMembers = {};
icons.forEach((icon, i) => {
  if (!listed[i]) return;
  for (const k of icon.keywords) {
    if (/^[a-z0-9]+(?: [a-z0-9]+)*$/.test(k) && k.length <= 30) (tagMembers[k] ||= []).push(icon.slug);
  }
});
const tags = Object.fromEntries(
  Object.entries(tagMembers)
    .filter(([, slugs]) => slugs.length >= TAG_MIN)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, slugs]) => [tagSlug(name), { name, slugs }])
);

const stats = {
  designs: icons.length,
  listed: listed.filter(Boolean).length,
  filled: icons.filter((i) => i.filled).length,
  regular: icons.filter((i) => i.regular).length,
  color: colorIcons.length,
  variants: icons.reduce(
    (n, i) => n + Object.values(i.variants || {}).reduce((m, v) => m + v.length, 0),
    0
  ),
  tags: Object.keys(tags).length,
  svgIcons: meta.svgIcons,
  upstreamCommit: meta.upstreamCommit,
  updated: meta.updated,
};

write("index.json", index);
write("details.json", details);
write("color.json", colorIcons);
write("tags.json", tags);
write("stats.json", stats);
console.log(`icons: ${icons.length}, color: ${colorIcons.length}, tags: ${stats.tags}, variants: ${stats.variants}`);

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
  "/color",
  "/browse",
  ...letters.map((l) => `/browse/${l}`),
  "/tag",
  ...Object.keys(tags).map((t) => `/tag/${t}`),
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
// Pages built from the icon data change when it's re-imported; guides carry
// their own date. Other pages (about, legal) have no reliable date.
const dataPage = /^\/(?:$|outlined|color|browse|tag|icon\/)/;
const lastmod = (path) => {
  const guide = guides.find((g) => path === `/guides/${g.slug}`);
  if (guide) return guide.date;
  if (path === "/guides") return guides.map((g) => g.date).sort().pop();
  return dataPage.test(path) ? meta.updated : null;
};
write(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
    .map((p) => {
      const date = lastmod(p);
      return `  <url><loc>${url(p)}</loc>${date ? `<lastmod>${date}</lastmod>` : ""}</url>`;
    })
    .join("\n")}\n</urlset>\n`
);
console.log(`routes: ${indexable.length + 1}`);
