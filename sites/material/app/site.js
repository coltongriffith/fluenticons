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
  gaId: "G-VGSV4M0LY9",
  adsenseClient: "ca-pub-9128081695641229",
  defaultTitle: "Materialicons: Free Google Material Symbols & Icons",
  description: (stats, roughCount) =>
    `Search, customize and download ${roughCount(
      stats.designs
    )} free Google Material Symbols in outlined, rounded and sharp styles, filled or not, as SVG, PNG, WEBP, React and Vue.`,
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
    { to: "/tag/", label: "Topics" },
    { to: "/guides/", label: "Guides" },
    { to: "/about/", label: "About" },
    { to: "/contact/", label: "Contact" },
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
};
