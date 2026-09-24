import { stats, roughCount } from "./icons";
import site from "~/site.js";

const SITE_NAME = site.name;
const ADSENSE_CLIENT = site.adsenseClient;

export const SITE_DESCRIPTION = site.description(stats, roughCount);

// Title, description, canonical URL and social tags for a page.
// `path` is the route path without a trailing slash ("/" for the homepage).
export function useSeo({ title, description = SITE_DESCRIPTION, path, noindex = false, type = "website", image = "/social.png" }) {
  const url = `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : site.defaultTitle;
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

// CollectionPage with an ItemList of the icons a listing page links to.
export function useCollectionJsonLd({ name, description, path, items }) {
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${path}/`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: `${SITE_URL}${item.path}`,
      })),
    },
  });
}
