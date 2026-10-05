import type { SponsorConfig } from "./utils/sponsor";

// fluenticons.co's sponsor: the only file to edit when a sponsor books.
//
// 1. Put a square logo in public/sponsors/ (96x96 or larger, PNG, SVG or WebP).
// 2. Fill in the fields below and set active: true.
// 3. Deploy. The card shows from startDate to endDate (whole days, UTC) in every
//    placement: homepage hero, icon pages, the icon editor, copy confirmations
//    and guides. Outside those dates, or with active: false, the placements show
//    the "Your product here" card instead.
//
// Preview before launch: add ?sponsor_preview=1 to any URL. It shows this
// sponsor whatever active and the dates say, and sends no analytics events.
//
// The build fails if the tagline is over 70 characters, or (when active) the
// url isn't https, the logo file is missing or a date is malformed.
const sponsor: SponsorConfig = {
  active: false,
  name: "",
  tagline: "",
  url: "https://example.com",
  logo: "/sponsors/example.png",
  logoAlt: "",
  startDate: "2026-11-01",
  endDate: "2026-11-30",
  ctaText: "",
};

export default sponsor;
