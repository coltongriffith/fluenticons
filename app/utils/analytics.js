// Sends a Google Analytics (GA4) event. Does nothing when gtag isn't loaded
// (blocked, or during prerendering), so it can never break the page.
export function track(name, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      if (searchTerm && PICKS.has(name) && !("search_term" in params)) params = { ...params, search_term: searchTerm };
      window.gtag("event", name, params);
    }
  } catch {}
}

// The search box's current query, added to the events for the icon people
// then pick, so reports can join what was searched to what was chosen
// ("billing" -> receipt_money). The agent API records the same pairs as
// agent_result_selected.
let searchTerm = "";
const PICKS = new Set(["select_content", "copy_icon", "download_icon", "favorite_add", "copy_code"]);
export function setSearchTerm(term) {
  searchTerm = term;
}
