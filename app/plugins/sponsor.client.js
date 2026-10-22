import { hasHiddenIn, liveSlugs, previewSlugs } from "../composables/sponsor";

// After the prerendered page has hydrated, check each sponsor's dates against
// today (the build may be older than a startDate or endDate) and turn on
// ?sponsor_preview=1 (every configured sponsor) or =<slug> (one), which shows
// sponsors without events.
//
// Sponsors with `hiddenIn` stay invisible (styles.css) until the visitor's
// country is known: Cloudflare's /cdn-cgi/trace gives it (loc=PL) without
// running any Function. Sponsors hidden there are then left out, and the rest
// shown (also if the lookup fails or takes over 2 seconds).
async function visitorCountry() {
  try {
    const res = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000) });
    return (await res.text()).match(/^loc=([A-Z]{2})$/m)?.[1] || "";
  } catch {
    return "";
  }
}

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
    const country = hasHiddenIn([...live, ...preview]) ? await visitorCountry() : "";
    state.value = { live, preview, country, geo: true };
    // Shown only once the hidden sponsors are out of the page.
    await nextTick();
    document.documentElement.dataset.geo = "";
  });
});
