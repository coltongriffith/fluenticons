// Settings for the site being built. Shared code imports "~/site.js", which
// resolves to the app/site.js of the site being built: this file for
// fluenticons.co, sites/material/app/site.js for the Material Icons site.
export default {
  id: "fluent",
  name: "Fluenticons",
  brand: "Fluent Icons",
  url: "https://fluenticons.co",
  gaId: "G-VGSV4M0LY9",
  adsenseClient: "ca-pub-9128081695641229",
  defaultTitle: "Fluenticons: Free Microsoft Fluent UI System Icons",
  description: (stats, roughCount) =>
    `Search, customize and download ${roughCount(
      stats.filled + stats.regular
    )} free Microsoft Fluent UI System Icons in filled, regular and color styles as SVG, PNG, WEBP, React and Vue.`,
  storageKey: "fluenticons:favorites",
  zipName: "fluenticons",

  // Icon grids; the first one is the homepage. `variant` is the UI style
  // ("filled" | "outlined"), mapped to files by defaultFile().
  grids: [
    { variant: "filled", path: "/", title: "Filled", subtitle: "2 px filled" },
    { variant: "outlined", path: "/outlined/", title: "Outlined", subtitle: "2 px stroked" },
  ],
  // File name of an icon in /icons when the index doesn't list one.
  // style: "filled" | "regular"
  defaultFile: (slug, style) => `ic_fluent_${slug}_24_${style}.svg`,
  // The editor's starting icon (drawn from the "sticker_24_regular" UI icon).
  placeholder: { slug: "sticker", file: "ic_fluent_sticker_24_regular.svg" },

  headerLinks: [
    { to: "/", label: "Icons" },
    { to: "/browse/", label: "Browse" },
    { to: "/guides/", label: "Guides" },
    { to: "/about/", label: "About" },
  ],
  footerLinks: [
    { to: "/", label: "Filled icons" },
    { to: "/outlined/", label: "Outlined icons" },
    { to: "/color/", label: "Color icons" },
    { to: "/browse/", label: "Browse A–Z" },
    { to: "/tag/", label: "Topics" },
    { to: "/new/", label: "New icons" },
    { to: "/guides/", label: "Guides" },
    { to: "/about/", label: "About" },
    { to: "/contact/", label: "Contact" },
    { to: "/license/", label: "License" },
    { to: "/terms/", label: "Terms" },
    { to: "/privacy-policy/", label: "Privacy" },
    { to: "https://materialicons.co/", label: "Material Icons" },
  ],
  // Footer notice: "{copyright} <license link>. {disclaimer}"
  footerCopyright: "Fluent UI System Icons are © Microsoft Corporation and released under the",
  footerLicense: "MIT License",
  footerDisclaimer:
    "Fluenticons is an independent project and is not affiliated with or endorsed by Microsoft.",
  errorBack: "Back to Fluent Icons",
  // Our other site, linked from the toolbar above the icon grid.
  sister: { label: "Material Icons", url: "https://materialicons.co/" },
};
