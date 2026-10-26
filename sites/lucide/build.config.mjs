// Settings for scripts/build-icon-data.mjs when building lucideicons.co
// (`node scripts/build-icon-data.mjs sites/lucide`).
const file = (slug) => `${slug.replace(/_/g, "-")}.svg`;

export default {
  root: new URL("./", import.meta.url),
  url: "https://lucideicons.co",
  // Lucide has one style, drawn with strokes; its files are named like the
  // icons (house.svg, arrow-left.svg).
  defaultFile: (slug) => file(slug),
  extraRoutes: ["/sponsor"],
  dataPage: /^\/(?:$|browse|tag|category|icon\/)/,
  // /category/<name> pages from Lucide's categories (an icon can be in several).
  categoryPages: true,
  // Which icon set this is, and the sister sites whose matching icons icon
  // pages link to ("Also in …"; see build-icon-data.mjs).
  kind: "lucide",
  crossSites: [
    { key: "fluent", kind: "fluent", data: "../../data/icons.json" },
    { key: "material", kind: "material", data: "../material/data/icons.json" },
  ],
  // Social preview images for icon pages (public/og/<slug>.png), with this text.
  ogImages: { label: "Lucide Icons", formats: "SVG · React · Vue · Svelte · Font" },
  // Lucide has no usage data, so "Common icons" on the homepage is a fixed list.
  homeCommon: "house search settings user plus trash pencil mail calendar message_circle share arrow_left arrow_right chevron_down check x star heart bell file folder shopping_cart lock globe".split(" "),
  tagMin: 10,
  tagMax: 250,
  tagStop: new Set(["lucide", "icon", "icons"]),
  detailFields: ["category", "categories", "aliases", "codepoint"],
  uiIcons: {
    search_24_filled: "search.svg",
    position_backward_24_filled: "arrow-left-right.svg",
    weather_sunny_24_regular: "sun.svg",
    weather_moon_24_regular: "moon.svg",
    heart_24_regular: "heart.svg",
    // Lucide has no filled heart; this one is drawn for the favorites button.
    heart_24_filled: "../ui/heart-filled.svg",
    copy_24_regular: "copy.svg",
    arrow_download_24_regular: "download.svg",
    folder_24_regular: "folder.svg",
    chevron_down_24_regular: "chevron-down.svg",
    balloon_24_regular: "search-x.svg",
    sticker_24_regular: "shapes.svg",
    dismiss_24_regular: "x.svg",
    open_24_regular: "external-link.svg",
    checkmark_24_regular: "check.svg",
    megaphone_loud_24_regular: "megaphone.svg",
  },
  feed: {
    title: "New Lucide icons | Lucideicons",
    item: (n) => `${n} new Lucide icon${n === 1 ? "" : "s"}`,
    description: "New icons in Lucide, as they're added to Lucideicons.",
  },
};
