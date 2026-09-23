import uiIcons from "~/generated/ui-icons.json";

export const PAGE_SIZE = 48;

const loaders = {
  filled: () => import("~/generated/icons-filled.json"),
  outlined: () => import("~/generated/icons-outlined.json"),
};
const cache = {};

// Loads the full icon list for a variant ("filled" | "outlined").
// Each icon: { id, name, variant, svgFileName, body, size }
export async function loadIcons(variant) {
  if (!cache[variant]) {
    const { default: rows } = await loaders[variant]();
    cache[variant] = rows.map(([name, svgFileName, body, size = 24]) => ({
      id: `${variant}:${name}`,
      name,
      variant,
      svgFileName,
      body,
      size,
    }));
  }
  return cache[variant];
}

export function uiIcon(key) {
  return uiIcons[key];
}

export const defaultIcon = {
  id: "placeholder",
  name: "Select and preview icons here",
  variant: "outlined",
  svgFileName: "ic_fluent_sticker_24_regular.svg",
  body: uiIcons.sticker_24_regular,
  size: 24,
};

export const useSearchQuery = () => useState("searchQuery", () => "");
export const useSelectedIcon = () => useState("selectedIcon", () => defaultIcon);

export function matchesQuery(icon, query) {
  return icon.name
    .toLowerCase()
    .includes(query.toLowerCase().replace(/\s+/g, ""));
}
