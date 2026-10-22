import { liveSlugs, previewSlugs } from "../composables/sponsor";

// After the prerendered page has hydrated, check each sponsor's dates against
// today (the build may be older than a startDate or endDate) and turn on
// ?sponsor_preview=1 (every configured sponsor) or =<slug> (one), which shows
// sponsors without events.
//
// Sponsors hidden in the visitor's country (`hiddenIn`) are then left out. The
// country comes from the lookup at the top of the page
// (plugins/sponsor-geo.server.js), which has usually finished by now; if not,
// they're left out as soon as it does.
export default defineNuxtPlugin(() => {
  // Same state as useSponsor(); taken here, where the Nuxt context is available.
  const state = useState("sponsor", () => ({ live: liveSlugs(), preview: [], country: "", geo: false }));
  onNuxtReady(async () => {
    let preview = [];
    try {
      const param = new URLSearchParams(location.search).get("sponsor_preview");
      if (param) preview = previewSlugs(param);
    } catch {}
    const live = liveSlugs(Date.now());
    preview = state.value.preview.length ? state.value.preview : preview;
    const known = document.documentElement.hasAttribute("data-geo");
    state.value = { live, preview, country: window.__sponsorCountry || "", geo: known || !window.__sponsorGeo };
    // The lookup also corrects a country remembered from an earlier visit.
    const country = (await window.__sponsorGeo) || "";
    if (!state.value.geo || country !== state.value.country) state.value = { ...state.value, country, geo: true };
  });
});
