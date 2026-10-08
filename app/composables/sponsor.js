import current from "~/sponsor";
import site from "~/site.js";
import { track } from "../utils/analytics";
import { isLive, sponsorLink, sponsorSlug } from "../utils/sponsor";

// The sitewide sponsor (app/sponsor.ts), its tagged links and click/impression
// events. Shared by every placement so the monthly report comes from one set of
// events: sponsor_impression and sponsor_click, each with sponsor + placement.
// A click is a left click (with or without Ctrl/Cmd/Shift) or a middle click;
// "Open in new tab" from the right-click menu can't be seen by the page.
//
// Pages are prerendered, so `live` starts as it was when the site was built and
// is checked again in the browser (plugins/sponsor.client.js): the sponsor
// appears and disappears on its dates without a redeploy, and ?sponsor_preview=1
// shows it early with no events.
export function useSponsor() {
  const state = useState("sponsor", () => ({ live: isLive(current), preview: false }));
  // The logo file found at build time (.svg, else .png; "" for initials).
  const logo = useAppConfig().sponsorLogo || "";
  const sponsor = computed(() => (state.value.live || state.value.preview ? { ...current, logo } : null));
  // utm_source: "fluenticons" for fluenticons.co, "materialicons" for materialicons.co.
  const source = new URL(site.url).hostname.split(".")[0];
  const send = (name, placement) =>
    sponsor.value && !state.value.preview && track(name, { sponsor: sponsorSlug(current.name), placement });

  return {
    sponsor,
    preview: computed(() => state.value.preview),
    href: (placement) => (sponsor.value ? sponsorLink(current, placement, source) : site.sponsorPage),
    click: (placement) => send("sponsor_click", placement),
    impression: (placement) => send("sponsor_impression", placement),
  };
}

// Two-letter tile for a card without a logo (the sponsor page example).
export const initials = (name = "") =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
