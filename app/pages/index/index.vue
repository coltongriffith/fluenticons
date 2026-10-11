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
});
</script>
