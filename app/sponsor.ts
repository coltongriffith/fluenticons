import type { SponsorConfig } from "./utils/sponsor";

// fluenticons.co's sponsors: the only file to edit when a sponsor books.
//
// 1. Put a square logo in public/sponsors/ (96x96 or larger). Point `logo` at
//    the .svg; if it's missing, the same name in .png is used. An animated .gif
//    works; add name-still.png for visitors who turn off animations.
// 2. Add the sponsor to the list below, set the dates and set active: true.
// 3. Deploy. Each card shows from its startDate to endDate (whole days, UTC) in
//    every placement: homepage hero, icon pages, the icon editor, copy
//    confirmations and guides. With two or more running, every placement shows
//    each of them (the one on top changes from page to page) and the copy
//    credit takes turns. With none running, the hero shows the "Your product
//    here" card and the other placements show nothing.
//
// `url` is used exactly as given when it already has UTM parameters (as the
// sponsor sent it); without any, utm_source/medium/campaign/content are added.
//
// Preview before launch: add ?sponsor_preview=1 to any URL to show every sponsor
// below whatever active and the dates say, or ?sponsor_preview=<slug> (e.g.
// lordicon) for one. Preview sends no analytics events.
//
// `hiddenIn: ["PL"]` keeps a sponsor from visitors in those countries (by
// Cloudflare's country for the visitor; plugins/sponsor-geo.server.js).
//
// The build fails if a tagline is over 70 characters, a headline over 40, or
// (when active) the url isn't https, the logo file is missing or a date is
// malformed.
const sponsors: SponsorConfig[] = [
  {
    // Paid; runs three months, Oct 7, 2026 – Jan 6, 2027.
    active: true,
    name: "Xceed Toolkit Plus for WPF",
    tagline: "Upgrade Your WPF UI with Xceed Toolkit Plus",
    url: "https://xceed.com/products/wpf/toolkit-plus-for-wpf/?utm_source=fluenticons.co&utm_medium=referral&utm_campaign=toolkit_plus_wpf",
    logo: "/sponsors/xceed.svg",
    logoAlt: "Xceed Toolkit Plus for WPF logo",
    startDate: "2026-10-07",
    endDate: "2027-01-06",
    ctaText: "See Toolkit Plus",
    ctaColor: "#FF671B",
    // Not shown in Poland while Lordicon (based there) runs; remove after.
    hiddenIn: ["PL"],
  },
  {
    // Runs one month, Oct 21 – Nov 20, 2026.
    active: true,
    name: "Lordicon",
    headline: "Make Your Icons Move",
    tagline: "Bring your UI to life with customizable animated icons for web & apps.",
    url: "https://lordicon.com/?utm_source=fluenticons&utm_medium=paid_referral&utm_campaign=make_your_icons_move",
    logo: "/sponsors/lordicon.gif",
    logoAlt: "Lordicon logo",
    startDate: "2026-10-21",
    endDate: "2026-11-20",
    ctaText: "Explore Lordicon",
    ctaColor: "#34C694",
  },
];

export default sponsors;
