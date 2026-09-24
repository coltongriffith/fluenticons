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
    { to: "/ai/", label: "For AI agents" },
    { to: "/about/", label: "About" },
    { to: "/contact/", label: "Contact" },
    { to: "/sponsor/", label: "Sponsor" },
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
  // The page about the agent API and MCP server, promoted in the editor.
  aiPage: "/ai/",

  // The sitewide sponsor, one at a time. null shows a "your product here"
  // card in the hero (linking to sponsorPage) and hides the other placements.
  sponsor: null,
  // sponsor: {
  //   id: "acme-ui",                 // analytics + utm_content; lowercase, no spaces
  //   name: "Acme UI",
  //   tagline: "Fluent-style Blazor components. 100+ controls, free trial.",
  //   url: "https://acme.dev",
  //   logo: "/sponsors/acme-ui.png", // square, 96x96 or larger, in public/sponsors/
  //   cta: "Try Acme UI",
  // },
  sponsorPage: "/sponsor/",
  // Figures and terms on the sponsor page. Refresh monthly from GA4.
  sponsorKit: {
    users: "5,800",
    sessions: "10,000",
    iconPages: "3,000+",
    updated: "September 2026",
    price: 300,
    foundingPrice: 175,
    foundingMonths: 3,
    email: "colton@fluenticons.co",
  },
};
