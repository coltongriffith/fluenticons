import config from "~/sponsor";
import site from "~/site.js";
import { track } from "../utils/analytics";
import { isLive, sponsorLink, sponsorList, sponsorSlug } from "../utils/sponsor";

// The site's sponsors (app/sponsor.ts), their tagged links and click/impression
// events. Shared by every placement so the monthly report comes from one set of
// events: sponsor_impression and sponsor_click, each with sponsor + placement.
// A click is a left click (with or without Ctrl/Cmd/Shift) or a middle click;
// "Open in new tab" from the right-click menu can't be seen by the page.
//
// More than one sponsor can run at once: every placement shows each running
// sponsor's card, and the copy credit takes turns.
//
// Pages are prerendered, so which sponsors are `live` starts as it was when the
// site was built and is checked again in the browser (plugins/sponsor.client.js):
// sponsors appear and disappear on their dates without a redeploy, and
// ?sponsor_preview=1 (or =<sponsor slug>) shows them early with no events.
const all = sponsorList(config).map((s) => ({ ...s, slug: sponsorSlug(s.name) }));
export const liveSlugs = (now = Date.now()) => all.filter((s) => isLive(s, now)).map((s) => s.slug);
// ?sponsor_preview=1: every configured sponsor; ?sponsor_preview=<slug>: that one.
export const previewSlugs = (param) =>
  all.filter((s) => s.name && s.url && (param === "1" || param === s.slug)).map((s) => s.slug);

export function useSponsor() {
  // `country`: the visitor's, set after hydration (plugins/sponsor.client.js).
  const state = useState("sponsor", () => ({ live: liveSlugs(), preview: [], country: "" }));
  // Each sponsor's logo files, found at build time (.svg, else .png; "" for initials).
  const logos = useAppConfig().sponsorLogos || {};
  const sponsors = computed(() => {
    const shown = state.value.preview.length ? state.value.preview : state.value.live;
    const here = (s) => !(state.value.country && s.hiddenIn?.includes(state.value.country));
    return all.filter((s) => shown.includes(s.slug) && here(s)).map((s) => ({ ...s, logo: logos[s.slug]?.logo || "", logoStill: logos[s.slug]?.still || "" }));
  });
  const preview = computed(() => state.value.preview.length > 0);
  // utm_source: "fluenticons" for fluenticons.co, "materialicons" for materialicons.co.
  const source = new URL(site.url).hostname.split(".")[0];
  // No events in preview, including before the preview state is set after
  // hydration (a live sponsor's card can be on screen by then).
  const previewing = () => preview.value || (import.meta.client && new URLSearchParams(location.search).has("sponsor_preview"));
  const send = (name, s, placement) => !previewing() && track(name, { sponsor: s.slug, placement });

  return {
    sponsors,
    preview,
    href: (s, placement) => sponsorLink(s, placement, source),
    click: (s, placement) => send("sponsor_click", s, placement),
    impression: (s, placement) => send("sponsor_impression", s, placement),
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
