import type { SponsorConfig } from "../../../app/utils/sponsor";

// lucideicons.co's sponsors. Works the same way as fluenticons.co's
// (see app/sponsor.ts in the repository root for the steps), including
// `hiddenIn`.
const sponsors: SponsorConfig[] = [
  {
    // Same booking as on fluenticons.co: Oct 27, 2026 – Jan 26, 2027, covering lucideicons.co too.
    // Set active: false if Ramy (Roundicons) cancels.
    active: true,
    name: "Getillustrations",
    tagline: "130,000+ illustrations & icons by real designers",
    url: "https://getillustrations.com",
    logo: "/sponsors/getillustrations.svg",
    logoAlt: "Getillustrations logo",
    logoBg: "#111",
    startDate: "2026-10-27",
    endDate: "2027-01-26",
    ctaText: "Browse illustrations",
    ctaColor: "#FFFFFF",
  },
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
  },
  {
    // Off: Lordicon never paid or replied (Oct 2026). Kept so it can be
    // switched back on (with new dates) if that changes.
    active: false,
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
