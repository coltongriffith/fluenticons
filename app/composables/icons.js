import uiIcons from "~/generated/ui-icons.json";
import siteStats from "~/generated/stats.json";
import site from "~/site.js";
import { cdnUrl, reactName } from "../utils/iconCode";

export const PAGE_SIZE = 48;
export const SITE_URL = site.url;
export const stats = siteStats;

// "3,000+" style counts for page copy, rounded down so they stay true.
export function roughCount(n, step = n >= 10000 ? 1000 : 100) {
  return `${(Math.floor(n / step) * step).toLocaleString("en-US")}+`;
}

// Every size and style of an icon, from Microsoft's @fluentui/svg-icons package
// (pinned version) on jsDelivr. The site's own copy of each icon stays in /icons.
export const variantFile = (slug, size, style) => `ic_fluent_${slug}_${size}_${style}.svg`;
export const variantUrl = (slug, size, style) => cdnUrl(stats.svgIcons, slug, size, style);
// Pixel size from a file name like ic_fluent_add_20_filled.svg.
export const fileSize = (file) => Number(file?.match(/_(\d+)_[a-z]+\.svg$/)?.[1] || 24);

// UI variant ("filled" | "outlined") -> file style ("filled" | "regular")
export const fileStyle = (variant) => (variant === "outlined" ? "regular" : "filled");
export const slugToPath = (slug) => `/icon/${slug.replace(/_/g, "-")}/`;
export const pathToSlug = (param) => String(param).replace(/-/g, "_");

let indexPromise;

// The icon catalogue (names, keywords, file names). Small enough to load on the client.
export function loadIndex() {
  indexPromise ||= import("~/generated/index.json").then(({ default: rows }) =>
    rows.map(([slug, name, styles, keywords, f, r, preview]) => ({
      slug,
      name,
      keywords: keywords ? keywords.split(",") : [],
      filled: styles & 1 ? f || site.defaultFile(slug, "filled") : null,
      regular: styles & 2 ? r || site.defaultFile(slug, "regular") : null,
      preview: preview || null,
      search: `${name}|${slug}|${keywords}`.toLowerCase().replace(/[\s_]+/g, ""),
    }))
  );
  return indexPromise;
}

// One grid entry per icon and style.
export function toIcon(entry, variant) {
  return {
    id: `${variant}:${entry.slug}`,
    slug: entry.slug,
    name: entry.name,
    variant,
    svgFileName: entry[fileStyle(variant)],
    search: entry.search,
  };
}

export async function loadIcons(variant) {
  const index = await loadIndex();
  return index.filter((e) => e[fileStyle(variant)]).map((e) => toIcon(e, variant));
}

// Full details (SVG markup, description, related icons) are only bundled into
// the prerender; in the browser they arrive through the page payload.
export async function loadIconDetails(slug) {
  if (import.meta.server) {
    const { default: details } = await import("~/generated/details.json");
    return details[slug] || null;
  }
  const entry = (await loadIndex()).find((e) => e.slug === slug);
  if (!entry) return null;
  const load = async (file) => file && { file, ...(await fetchIconSvg(file)) };
  const [filled, regular] = await Promise.all([load(entry.filled), load(entry.regular)]);
  return {
    description: "",
    related: [],
    variants: {},
    ...(filled && { filled }),
    ...(regular && { regular }),
  };
}

let tagsPromise;
// { [tag]: { name, slugs } } for topic pages (see scripts/build-icon-data.mjs).
export function loadTags() {
  tagsPromise ||= import("~/generated/tags.json").then((m) => m.default);
  return tagsPromise;
}

const svgCache = new Map();
// { size, body } for an icon file, with #212121 mapped to currentColor.
export function fetchIconSvg(file) {
  if (!svgCache.has(file)) {
    svgCache.set(
      file,
      fetch(`/icons/${file}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Could not load ${file}`);
          return res.text();
        })
        .then((svg) => {
          const match = svg.match(/^<svg[^>]*\bwidth="(\d+)"[^>]*>([\s\S]*)<\/svg>\s*$/);
          return {
            size: Number(match?.[1] || 24),
            body: (match?.[2] || "").trim().replace(/fill="#212121"/g, 'fill="currentColor"'),
          };
        })
        .catch((err) => {
          svgCache.delete(file);
          throw err;
        })
    );
  }
  return svgCache.get(file);
}

export function uiIcon(key) {
  return uiIcons[key];
}

export const defaultIcon = {
  id: "placeholder",
  slug: site.placeholder.slug,
  name: "Select and preview icons here",
  variant: "outlined",
  svgFileName: site.placeholder.file,
  body: uiIcons.sticker_24_regular,
  size: 24,
};

export const useSearchQuery = () => useState("searchQuery", () => "");
export const useSelectedIcon = () => useState("selectedIcon", () => defaultIcon);

export function matchesQuery(entry, query) {
  const q = query.toLowerCase().replace(/[\s_]+/g, "");
  if (!q) return true;
  const search =
    entry.search ?? `${entry.name}|${entry.slug}`.toLowerCase().replace(/[\s_]+/g, "");
  return search.includes(q);
}

// React component for a grid icon (UI variant "filled" | "outlined").
export function componentName(slug, variant, size = 24) {
  if (site.componentName) return site.componentName(slug, variant, size);
  return reactName(slug, size, fileStyle(variant));
}
