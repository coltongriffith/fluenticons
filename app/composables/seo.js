const SITE_NAME = "Fluenticons";
const ADSENSE_CLIENT = "ca-pub-9128081695641229";

export const SITE_DESCRIPTION =
  "Search, customize and download 5,000+ free Microsoft Fluent UI System Icons in filled and regular styles as SVG, PNG, WEBP, React and Vue.";

// Title, description, canonical URL and social tags for a page.
// `path` is the route path without a trailing slash ("/" for the homepage).
export function useSeo({ title, description = SITE_DESCRIPTION, path, noindex = false, type = "website", image = "/social.png" }) {
  const url = `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}: Free Microsoft Fluent UI System Icons`;
  useHead({
    title: fullTitle,
    link: noindex ? [] : [{ rel: "canonical", href: url }],
    meta: noindex ? [{ name: "robots", content: "noindex, follow" }] : [],
  });
  useSeoMeta({
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogUrl: url,
    ogType: type,
    ogImage: `${SITE_URL}${image}`,
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: description,
  });
}

export function useJsonLd(data) {
  useHead({
    script: [{ type: "application/ld+json", innerHTML: JSON.stringify(data) }],
  });
}

// Loads Google AdSense (Auto ads) on pages with real content. Utility pages
// (favorites, 404, legal pages) don't call this, so no ads are shown there.
export function useAdsense() {
  useHead({
    script: [
      {
        key: "adsense",
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`,
        async: true,
        crossorigin: "anonymous",
      },
    ],
  });
}
