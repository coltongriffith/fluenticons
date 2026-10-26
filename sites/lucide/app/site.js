// Settings for lucideicons.co (see app/site.js in the repository root for the fields).
const file = (slug) => `${slug.replace(/_/g, "-")}.svg`;
// Lucide's component names: house → House, arrow-down-0-1 → ArrowDown01.
export const lucideName = (slug) =>
  slug
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

export default {
  id: "lucide",
  name: "Lucideicons",
  brand: "Lucide Icons",
  url: "https://lucideicons.co",
  // GA4 measurement ID for lucideicons.co (its own property). Empty: no analytics.
  gaId: "", // set in nuxt.config.js
  // lucideicons.co doesn't run AdSense.
  adsenseClient: "",
  defaultTitle: "Lucide Icons — Search, Copy SVG, React, Vue & Svelte Code",
  // Homepage and default meta description: at most 155 characters.
  description: (stats, roughCount) =>
    `Search ${roughCount(
      stats.designs
    )} free Lucide icons by name, tag or old name. Copy SVG, React, Vue, Svelte or Angular code, or download PNG. The icons behind shadcn/ui.`,
  storageKey: "lucideicons:favorites",
  zipName: "lucide-icons",

  grids: [{ variant: "outlined", path: "/", title: "Lucide", subtitle: "2 px stroke" }],
  // Local files are lucide-static's: house.svg, arrow-left.svg.
  defaultFile: (slug) => file(slug),
  placeholder: { slug: "shapes", file: "shapes.svg" },
  // Component names for the editor's Vue and React snippets.
  componentName: (slug) => `${lucideName(slug)}Icon`,

  headerLinks: [
    { to: "/", label: "Icons" },
    { to: "/browse/", label: "Browse" },
    { to: "/guides/", label: "Guides" },
    { to: "/about/", label: "About" },
  ],
  footerLinks: [
    { to: "/", label: "All icons" },
    { to: "/browse/", label: "Browse A–Z" },
    { to: "/category/", label: "Categories" },
    { to: "/tag/", label: "Topics" },
    { to: "/new/", label: "New icons" },
    { to: "/guides/", label: "Guides" },
    { to: "/about/", label: "About" },
    { to: "/contact/", label: "Contact" },
    { to: "/sponsor/", label: "Sponsor" },
    { to: "/license/", label: "License" },
    { to: "/terms/", label: "Terms" },
    { to: "/privacy-policy/", label: "Privacy" },
    { to: "https://fluenticons.co/", label: "Fluent Icons" },
    { to: "https://materialicons.co/", label: "Material Icons" },
  ],
  footerCopyright: "Lucide icons are © Lucide Icons and Contributors and released under the",
  footerLicense: "ISC License",
  footerDisclaimer:
    "Lucideicons is an independent project and is not affiliated with or endorsed by the Lucide project.",
  errorBack: "Back to Lucide Icons",
  sister: {
    label: "Fluent Icons",
    url: "https://fluenticons.co/",
  },
  // Icon pages: the matching icon on each sister site (IconTwin.vue).
  twinSites: [
    { key: "fluent", url: "https://fluenticons.co/", heading: "Also in Fluent", note: "Microsoft's version of this icon, on Fluenticons" },
    { key: "material", url: "https://materialicons.co/", heading: "Also in Material Symbols", note: "Google's version of this icon, on Materialicons" },
  ],

  // Sponsors are set in app/sponsor.ts (same setup as fluenticons.co).
  sponsorPage: "/sponsor/",
  // Figures and terms on the sponsor page. Traffic figures are left out until
  // the site has a month of GA4 data (the stats row is hidden without them).
  sponsorKit: {
    iconSet: "Lucide icons",
    iconName: "a Lucide icon",
    audience:
      "Front-end developers building with React, Next.js, Vue, Svelte and shadcn/ui, plus the product designers working alongside them.",
    price: 300,
    foundingPrice: 175,
    foundingMonths: 3,
    email: "colton@fluenticons.co",
  },
};
