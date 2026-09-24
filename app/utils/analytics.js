// Sends a Google Analytics (GA4) event. Does nothing when gtag isn't loaded
// (blocked, or during prerendering), so it can never break the page.
export function track(name, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch {}
}
