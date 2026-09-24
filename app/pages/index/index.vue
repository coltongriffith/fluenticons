<template>
  <div>
    <IconGrid variant="filled" />
    <HomeContent />
  </div>
</template>

<script setup>
useSeo({ path: "/" });
useAdsense();
useJsonLd({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fluenticons",
  url: `${SITE_URL}/`,
  description: SITE_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});
</script>
