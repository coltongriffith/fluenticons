import type { SponsorConfig } from "../../../app/utils/sponsor";

// materialicons.co's sponsors. Works the same way as fluenticons.co's
// (see app/sponsor.ts in the repository root for the steps), including
// `hiddenIn` (sites/material/functions/_middleware.js).
const sponsors: SponsorConfig[] = [
  {
    // Same booking as on fluenticons.co: Oct 7, 2026 – Jan 6, 2027.
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
    // Same booking as on fluenticons.co: Oct 21 – Nov 20, 2026.
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
