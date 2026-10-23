import { liveSlugs, previewSlugs } from "../composables/sponsor";

// After the prerendered page has hydrated, check each sponsor's dates against
// today (the build may be older than a startDate or endDate) and turn on
// ?sponsor_preview=1 (every configured sponsor) or =<slug> (one), which shows
// sponsors without events.
//
// Sponsors hidden in the visitor's country (`hiddenIn`) are then left out. The
// country comes from the lookup at the top of the page
// (plugins/sponsor-geo.server.js).
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
    // The remembered country (if any) decides what shows now; events for the
    // hidden-in-some-countries sponsors wait for the fresh lookup (`geo`).
    const lookup = window.__sponsorGeo;
    state.value = { live, preview, country: window.__sponsorCountry || "", geo: !lookup };
    if (!lookup) return;
    const country = (await lookup) || "";
    state.value = { ...state.value, country, geo: true };
  });
});
