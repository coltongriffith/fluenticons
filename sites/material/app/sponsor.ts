import type { SponsorConfig } from "../../../app/utils/sponsor";

// materialicons.co's sponsors. Works the same way as fluenticons.co's
// (see app/sponsor.ts in the repository root for the steps). `hiddenIn` has
// no effect here: this site doesn't run functions/_middleware.js.
const sponsors: SponsorConfig[] = [
  {
    // Bonus with Lordicon's fluenticons.co booking: Oct 21 – Nov 20, 2026.
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
