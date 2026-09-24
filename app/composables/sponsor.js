import site from "~/site.js";
import { track } from "../utils/analytics";

// The booked sponsor (app/site.js), its tagged links and click/impression events.
// Shared by every placement so the monthly report comes from one set of events:
// sponsor_impression and sponsor_click, each with sponsor + placement.
export function useSponsor() {
  const sponsor = site.sponsor || null;

  function href(placement, s = sponsor) {
    if (!s?.url) return "#";
    const url = new URL(s.url);
    url.searchParams.set("utm_source", new URL(site.url).hostname);
    url.searchParams.set("utm_medium", "sponsorship");
    url.searchParams.set("utm_content", placement);
    return url.toString();
  }

  const click = (placement) => sponsor && track("sponsor_click", { sponsor: sponsor.id, placement });
  const impression = (placement) => sponsor && track("sponsor_impression", { sponsor: sponsor.id, placement });

  return { sponsor, href, click, impression };
}

// Two-letter tile for a sponsor without a logo (and the sponsor page preview).
export const initials = (name = "") =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
