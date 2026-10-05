import type { SponsorConfig } from "../../../app/utils/sponsor";

// materialicons.co's sponsor. Works the same way as fluenticons.co's
// (see app/sponsor.ts in the repository root for the steps).
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
