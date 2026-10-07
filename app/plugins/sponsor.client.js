import current from "~/sponsor";
import { isLive } from "../utils/sponsor";

// After the prerendered page has hydrated, check the sponsor's dates against
// today (the build may be older than startDate or endDate) and turn on
// ?sponsor_preview=1, which shows the configured sponsor without events.
export default defineNuxtPlugin(() => {
  // Same state as useSponsor(); taken here, where the Nuxt context is available.
  const state = useState("sponsor", () => ({ live: isLive(current), preview: false }));
  onNuxtReady(() => {
    let preview = false;
    try {
      preview = new URLSearchParams(location.search).get("sponsor_preview") === "1" && Boolean(current.name && current.url);
    } catch {}
    state.value = { live: isLive(current, Date.now()), preview: state.value.preview || preview };
  });
});
