// Builds everything the site renders from data/icons.json, data/meta.json,
// public/icons/*.svg and content/guides/*.md. Run automatically by
// `yarn dev` / `yarn generate`.
//
// `node scripts/build-icon-data.mjs` builds fluenticons.co (the repo root);
// `node scripts/build-icon-data.mjs sites/material` builds another site from
// its own data, icons and guides, with the settings in its build.config.mjs.
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
//   new.json          [{ date, icons: [slug, name, file][] }] newest first, for /new/
//   public/feed.xml   RSS feed of those updates
//   ui-icons.json     inner SVG markup for the site's own UI icons
//   api-catalog.json  fluenticons.co only: the agent API's catalogue (see agent/catalog.js)
//   guides.json       [{ slug, title, description, date, html }]
//   routes.json       every prerendered page path
//   public/sitemap.xml
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { marked } from "marked";
import { execFileSync } from "node:child_process";
import { renameSync } from "node:fs";

// Settings for fluenticons.co; other sites export the same shape.
const FLUENT = {
  root: new URL("../", import.meta.url),
  url: "https://fluenticons.co",
  defaultFile: (slug, style) => `ic_fluent_${slug}_24_${style}.svg`,
  // Grid pages besides the homepage, and other data pages.
  extraRoutes: ["/outlined", "/color", "/ai", "/sponsor"],
  // Writes app/generated/api-catalog.json for the agent API (agent/, functions/).
  apiCatalog: true,
  dataPage: /^\/(?:$|outlined|color|browse|tag|icon\/)/,
  tagMin: 10,
  uiIcons: Object.fromEntries(
    [
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
      "checkmark_24_regular",
      "megaphone_loud_24_regular",
    ].map((key) => [key, `ic_fluent_${key}.svg`])
  ),
  feed: {
    title: "New Fluent icons | Fluenticons",
    item: (n) => `${n} new Fluent icon${n === 1 ? "" : "s"}`,
    description: "New icons in Microsoft's Fluent UI System Icons, as they're added to Fluenticons.",
  },
};
const config = process.argv[2]
  ? (await import(new URL(`../${process.argv[2].replace(/\/$/, "")}/build.config.mjs`, import.meta.url))).default
  : FLUENT;

const root = config.root;
const read = (path) => readFileSync(new URL(path, root), "utf8");
const outDir = new URL("app/generated/", root);
mkdirSync(new URL("public/", outDir), { recursive: true });
const write = (name, data) =>
  writeFileSync(new URL(name, outDir), typeof data === "string" ? data : JSON.stringify(data));

const SITE = config.url;

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
const defaultFile = config.defaultFile;

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
    // Extra per-icon fields a site's pages use (see its build.config.mjs).
    ...Object.fromEntries((config.detailFields || []).filter((f) => icon[f] != null).map((f) => [f, icon[f]])),
  };
});

const colorIcons = icons.filter((i) => i.color).map((i) => [i.slug, i.name, i.color]);

// Tag pages: keywords that at least TAG_MIN listed icons share.
const TAG_MIN = config.tagMin;
const tagSlug = (keyword) => keyword.replace(/\s+/g, "-");
const tagMembers = {};
icons.forEach((icon, i) => {
  if (!listed[i]) return;
  for (const k of icon.keywords) {
    if (/^[a-z0-9]+(?: [a-z0-9]+)*$/.test(k) && k.length <= 30) (tagMembers[k] ||= []).push(icon.slug);
  }
});
// A site can drop generic keywords and cap the number of topic pages
// (keeping the ones shared by the most icons).
const tagEntries = Object.entries(tagMembers)
  .filter(([name, slugs]) => slugs.length >= TAG_MIN && !config.tagStop?.has(name))
  .sort(([, a], [, b]) => b.length - a.length)
  .slice(0, config.tagMax || Infinity);
const tags = Object.fromEntries(
  tagEntries
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
  version: meta.version,
  updated: meta.updated,
};

// New icons, grouped by the import that added them (newest first).
const NEW_UPDATES = 12;
const byDate = {};
for (const icon of icons) {
  if (!icon.added) continue;
  const file = icon.regular || icon.filled || icon.color || icon.light;
  (byDate[icon.added] ||= []).push([icon.slug, icon.name, file || 0]);
}
const newIcons = Object.keys(byDate)
  .sort()
  .reverse()
  .slice(0, NEW_UPDATES)
  .map((date) => ({ date, icons: byDate[date] }));

write("index.json", index);
write("details.json", details);
write("new.json", newIcons);
write("color.json", colorIcons);
write("tags.json", tags);
write("stats.json", stats);
// The agent API (agent/catalog.js): every design with its sizes per style,
// related icons and the keywords that have topic pages.
if (config.apiCatalog) {
  write("api-catalog.json", {
    versions: { svgIcons: meta.svgIcons, upstreamCommit: meta.upstreamCommit, updated: meta.updated },
    topics: Object.values(tags).map((t) => t.name),
    icons: icons.map((icon) => [
      icon.slug,
      icon.name,
      icon.description || "",
      icon.keywords.join(","),
      icon.variants || {},
      details[icon.slug].related.slice(0, 8),
      icon.legacy ? 1 : 0,
    ]),
  });
  // The CLI (packages/cli) as /cli.tgz, for `npx -y https://fluenticons.co/cli.tgz`.
  const packed = execFileSync("npm", ["pack", "./packages/cli", "--pack-destination", "app/generated/public", "--silent"], {
    cwd: new URL(".", root),
    encoding: "utf8",
  }).trim();
  renameSync(new URL(`public/${packed.split("\n").pop()}`, outDir), new URL("public/cli.tgz", outDir));
}
console.log(`icons: ${icons.length}, color: ${colorIcons.length}, tags: ${stats.tags}, variants: ${stats.variants}`);

// ---- UI icons ------------------------------------------------------------
// Keys are the same on every site (components refer to them); each site maps
// them to one of its own icon files.
write(
  "ui-icons.json",
  Object.fromEntries(Object.entries(config.uiIcons).map(([key, file]) => [key, readSvg(file).body]))
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
  ...config.extraRoutes,
  "/browse",
  ...letters.map((l) => `/browse/${l}`),
  "/tag",
  ...Object.keys(tags).map((t) => `/tag/${t}`),
  ...(newIcons.length ? ["/new"] : []),
  ...icons.map((i) => `/icon/${i.slug.replace(/_/g, "-")}`),
  "/guides",
  ...guides.map((g) => `/guides/${g.slug}`),
  "/about",
  "/contact",
  "/license",
  "/terms",
  "/privacy-policy",
];
// /new is always prerendered (it shows an empty state until an update adds
// icons) but only listed in the sitemap once it has icons.
write("routes.json", [...indexable, ...(newIcons.length ? [] : ["/new"]), "/favorites"]);

const url = (path) => `${SITE}${path === "/" ? "/" : `${path}/`}`;

// ---- RSS feed of new icons ---------------------------------------------------
const escapeXml = (s) =>
  String(s).replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[c]);
const longDate = (date) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const feedItems = newIcons.map(({ date, icons: added }) => {
  const link = `${SITE}/new/#${date}`;
  const list = added
    .slice(0, 100)
    .map(([slug, name]) => `<li><a href="${url(`/icon/${slug.replace(/_/g, "-")}`)}">${escapeXml(name)}</a></li>`)
    .join("");
  const more = added.length > 100 ? `<p>…and ${added.length - 100} more.</p>` : "";
  return `    <item>
      <title>${config.feed.item(added.length)} (${longDate(date)})</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(`${date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(`<ul>${list}</ul>${more}`)}</description>
    </item>`;
});
write(
  "public/feed.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.feed.title}</title>
    <link>${SITE}/new/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>${config.feed.description}</description>
    <language>en</language>
${feedItems.join("\n")}
  </channel>
</rss>
`
);
// Pages built from the icon data change when it's re-imported; guides carry
// their own date. Other pages (about, legal) have no reliable date.
const dataPage = config.dataPage;
const lastmod = (path) => {
  const guide = guides.find((g) => path === `/guides/${g.slug}`);
  if (guide) return guide.date;
  if (path === "/guides") return guides.map((g) => g.date).sort().pop();
  if (path === "/new") return newIcons[0]?.date || null;
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
