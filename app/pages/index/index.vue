<template>
  <div>
    <IconGrid :variant="site.grids[0].variant" />
    <HomeContent />
  </div>
</template>

<script setup>
import site from "~/site.js";

useSeo({ path: "/" });
useAdsense();
useJsonLd({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: `${SITE_URL}/`,
  description: SITE_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});
</script>
