import { liveSlugs, previewSlugs } from "../composables/sponsor";

// After the prerendered page has hydrated, check each sponsor's dates against
// today (the build may be older than a startDate or endDate) and turn on
// ?sponsor_preview=1 (every configured sponsor) or =<slug> (one), which shows
// sponsors without events.
export default defineNuxtPlugin(() => {
  // Same state as useSponsor(); taken here, where the Nuxt context is available.
  const state = useState("sponsor", () => ({ live: liveSlugs(), preview: [] }));
  onNuxtReady(() => {
    let preview = [];
    try {
      const param = new URLSearchParams(location.search).get("sponsor_preview");
      if (param) preview = previewSlugs(param);
    } catch {}
    state.value = { live: liveSlugs(Date.now()), preview: state.value.preview.length ? state.value.preview : preview };
  });
});
