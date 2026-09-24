import uiIcons from "~/generated/ui-icons.json";

export const PAGE_SIZE = 48;
export const SITE_URL = "https://fluenticons.co";

// UI variant ("filled" | "outlined") -> file style ("filled" | "regular")
export const fileStyle = (variant) => (variant === "outlined" ? "regular" : "filled");
export const slugToPath = (slug) => `/icon/${slug.replace(/_/g, "-")}/`;
export const pathToSlug = (param) => String(param).replace(/-/g, "_");

let indexPromise;

// The icon catalogue (names, keywords, file names). Small enough to load on the client.
export function loadIndex() {
  indexPromise ||= import("~/generated/index.json").then(({ default: rows }) =>
    rows.map(([slug, name, styles, keywords, f, r]) => ({
      slug,
      name,
      keywords: keywords ? keywords.split(" ") : [],
      filled: styles & 1 ? f || `ic_fluent_${slug}_24_filled.svg` : null,
      regular: styles & 2 ? r || `ic_fluent_${slug}_24_regular.svg` : null,
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
  return { description: "", related: [], ...(filled && { filled }), ...(regular && { regular }) };
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
  slug: "sticker",
  name: "Select and preview icons here",
  variant: "outlined",
  svgFileName: "ic_fluent_sticker_24_regular.svg",
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

// PascalCase component name, matching @fluentui/react-icons (e.g. AddCircle24Filled).
export function componentName(slug, variant) {
  const base = slug
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
    .replace(/(\d)([a-z])/g, (_, d, l) => d + l.toUpperCase());
  return `${base}24${variant === "outlined" ? "Regular" : "Filled"}`;
}
