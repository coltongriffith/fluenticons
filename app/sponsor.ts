import type { SponsorConfig } from "./utils/sponsor";

// fluenticons.co's sponsor: the only file to edit when a sponsor books.
//
// 1. Put a square logo in public/sponsors/ (96x96 or larger). Point `logo` at
//    the .svg; if it's missing, the same name in .png is used.
// 2. Fill in the fields below, set the dates and set active: true.
// 3. Deploy. The card shows from startDate to endDate (whole days, UTC) in every
//    placement: homepage hero, icon pages, the icon editor, copy confirmations
//    and guides. Outside those dates, or with active: false, the hero shows the
//    "Your product here" card and the other placements show nothing.
//
// `url` is used exactly as given when it already has UTM parameters (as the
// sponsor sent it); without any, utm_source/medium/campaign/content are added.
//
// Preview before launch: add ?sponsor_preview=1 to any URL. It shows this
// sponsor whatever active and the dates say, and sends no analytics events.
//
// The build fails if the tagline is over 70 characters, or (when active) the
// url isn't https, the logo file is missing or a date is malformed.
const sponsor: SponsorConfig = {
  // Preview only until Xceed has paid. To launch, set active: true and the dates.
  active: false,
  name: "Xceed Toolkit Plus for WPF",
  tagline: "Upgrade Your WPF UI with Xceed Toolkit Plus",
  url: "https://xceed.com/products/wpf/toolkit-plus-for-wpf/?utm_source=fluenticons.co&utm_medium=referral&utm_campaign=toolkit_plus_wpf",
  logo: "/sponsors/xceed.svg",
  logoAlt: "Xceed Toolkit Plus for WPF logo",
  startDate: "2026-11-01",
  endDate: "2026-11-30",
};

export default sponsor;
