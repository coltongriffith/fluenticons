import { track } from "../utils/analytics";

// Visits that come from an AI assistant, sent once per browser session as an
// "ai_referral" event (with ai_source) so the reports show AI-driven traffic in
// one place: links in our MCP results (utm_medium=mcp), links ChatGPT tags with
// utm_source=chatgpt.com, and referrers from AI chat sites.
const AI_SOURCES = [
  [/chatgpt\.com|openai\.com/, "chatgpt"],
  [/claude\.ai|anthropic\.com/, "claude"],
  [/perplexity\.ai/, "perplexity"],
  [/gemini\.google\.com|bard\.google\.com/, "gemini"],
  [/copilot\.microsoft\.com/, "copilot"],
  [/deepseek\.com/, "deepseek"],
  [/grok\.com/, "grok"],
  [/meta\.ai/, "meta-ai"],
  [/mistral\.ai/, "mistral"],
];
const aiSource = (host) => AI_SOURCES.find(([re]) => re.test(host || ""))?.[1];

export default defineNuxtPlugin(() => {
  try {
    if (sessionStorage.getItem("ai_referral")) return;
    const params = new URLSearchParams(location.search);
    const utmSource = params.get("utm_source") || "";
    let referrer = "";
    try {
      referrer = document.referrer ? new URL(document.referrer).hostname : "";
    } catch {}
    const source =
      params.get("utm_medium") === "mcp" ? utmSource || "mcp" : aiSource(utmSource) || aiSource(referrer);
    if (!source) return;
    sessionStorage.setItem("ai_referral", source);
    track("ai_referral", {
      ai_source: source,
      ai_medium: params.get("utm_medium") === "mcp" ? "mcp" : "chat",
      landing_page: location.pathname,
    });
  } catch {}
});
