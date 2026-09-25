// Settings for scripts/build-icon-data.mjs when building materialicons.co
// (`node scripts/build-icon-data.mjs sites/material`).
export default {
  root: new URL("./", import.meta.url),
  url: "https://materialicons.co",
  defaultFile: (slug, style) => (style === "filled" ? `${slug}-fill.svg` : `${slug}.svg`),
  extraRoutes: ["/filled", "/sponsor"],
  dataPage: /^\/(?:$|filled|browse|tag|icon\/)/,
  // Google tags icons generously; topic pages need at least 15 icons, and
  // the 250 largest topics are kept.
  tagMin: 15,
  tagMax: 250,
  tagStop: new Set(["other", "outlined", "rounded", "sharp", "google", "material"]),
  detailFields: ["category", "popularity", "codepoint", "flutter"],
  uiIcons: {
    search_24_filled: "search.svg",
    position_backward_24_filled: "swap_horiz.svg",
    weather_sunny_24_regular: "light_mode.svg",
    weather_moon_24_regular: "dark_mode.svg",
    heart_24_regular: "favorite.svg",
    heart_24_filled: "favorite-fill.svg",
    copy_24_regular: "content_copy.svg",
    arrow_download_24_regular: "download.svg",
    folder_24_regular: "folder.svg",
    chevron_down_24_regular: "keyboard_arrow_down.svg",
    balloon_24_regular: "search_off.svg",
    sticker_24_regular: "interests.svg",
    dismiss_24_regular: "close.svg",
    open_24_regular: "open_in_new.svg",
    checkmark_24_regular: "check.svg",
    megaphone_loud_24_regular: "campaign.svg",
  },
  feed: {
    title: "New Material icons | Materialicons",
    item: (n) => `${n} new Material Symbol${n === 1 ? "" : "s"}`,
    description: "New icons in Google's Material Symbols, as they're added to Materialicons.",
  },
};
