// Settings for materialicons.co (see app/site.js for the fields).
const pascal = (slug) => {
  const name = slug
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  return /^\d/.test(name) ? `Icon${name}` : name;
};

export default {
  id: "material",
  name: "Materialicons",
  brand: "Material Icons",
  url: "https://materialicons.co",
  gaId: "G-EN85Z8G3Z6",
  adsenseClient: "ca-pub-9128081695641229",
  defaultTitle: "Material Icons & Symbols — Search, Copy SVG, JSX, Font Code",
  // Homepage and default meta description: at most 155 characters.
  description: (stats, roughCount) =>
    `Search ${roughCount(
      stats.designs
    )} free Material Icons and Material Symbols. Copy SVG, JSX, MUI, Flutter or font code, or download PNG in outlined, rounded and sharp.`,
  storageKey: "materialicons:favorites",
  zipName: "material-icons",

  grids: [
    { variant: "outlined", path: "/", title: "Outlined", subtitle: "fill off" },
    { variant: "filled", path: "/filled/", title: "Filled", subtitle: "fill on" },
  ],
  // Local files follow @material-symbols/svg-400: home.svg and home-fill.svg.
  defaultFile: (slug, style) => (style === "filled" ? `${slug}-fill.svg` : `${slug}.svg`),
  placeholder: { slug: "interests", file: "interests.svg" },
  // Component names for the editor's Vue and React snippets.
  componentName: (slug, variant) => `${pascal(slug)}${variant === "filled" ? "Filled" : ""}Icon`,

  headerLinks: [
    { to: "/", label: "Icons" },
    { to: "/browse/", label: "Browse" },
    { to: "/guides/", label: "Guides" },
    { to: "/about/", label: "About" },
  ],
  footerLinks: [
    { to: "/", label: "Outlined icons" },
    { to: "/filled/", label: "Filled icons" },
    { to: "/browse/", label: "Browse A–Z" },
    { to: "/category/", label: "Categories" },
    { to: "/tag/", label: "Topics" },
    { to: "/material-symbols/", label: "Material Symbols" },
    { to: "/mui-material-icons/", label: "MUI icons" },
    { to: "/angular-material-icons/", label: "Angular icons" },
    { to: "/guides/", label: "Guides" },
    { to: "/about/", label: "About" },
    { to: "/contact/", label: "Contact" },
    { to: "/sponsor/", label: "Sponsor" },
    { to: "/license/", label: "License" },
    { to: "/terms/", label: "Terms" },
    { to: "/privacy-policy/", label: "Privacy" },
    { to: "https://fluenticons.co/", label: "Fluent Icons" },
  ],
  footerCopyright: "Material Symbols are © Google LLC and released under the",
  footerLicense: "Apache License 2.0",
  footerDisclaimer:
    "Materialicons is an independent project and is not affiliated with or endorsed by Google.",
  errorBack: "Back to Material Icons",
  sister: { label: "Fluent Icons", url: "https://fluenticons.co/" },

  // The sitewide sponsor, one at a time (same setup as fluenticons.co; see
  // app/site.js there). null shows a "your product here" card in the hero.
  sponsor: null,
  sponsorPage: "/sponsor/",
  // Figures and terms on the sponsor page. Traffic figures are left out until
  // the site has a month of GA4 data (the stats row is hidden without them).
  sponsorKit: {
    iconSet: "Google's Material Symbols",
    iconName: "a Google Material Symbols icon",
    audience:
      "Front-end, Android and Flutter developers and product designers working with Google's Material Design: React, Vue, Jetpack Compose, Android XML, Flutter, the icon font and Figma.",
    price: 300,
    foundingPrice: 175,
    foundingMonths: 3,
    email: "colton@fluenticons.co",
  },
};
