<template>
  <article class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/guides/" class="hover:underline">Guides</NuxtLink>
      <span class="mx-2">/</span>
      <span>{{ guide.title }}</span>
    </nav>
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>{{ guide.title }}</h1>
      <p class="text-sm text-gray-500">
        By Colton Griffith · Updated <time :datetime="guide.date">{{ formattedDate }}</time>
      </p>
      <div v-html="guide.html"></div>
      <hr />
      <p>
        Find the icons mentioned here with the <NuxtLink to="/">icon search</NuxtLink>, or
        <NuxtLink to="/guides/">read another guide</NuxtLink>.
      </p>
    </div>
  </article>
</template>

<script setup>
import site from "~/site.js";

const route = useRoute();
const slug = String(route.params.slug);

const { data: guide } = await useAsyncData(`guide-${slug}`, async () => {
  const { default: all } = await import("~/generated/guides.json");
  return all.find((g) => g.slug === slug) || null;
});
if (!guide.value) {
  throw createError({ statusCode: 404, statusMessage: "Guide not found", fatal: true });
}

const formattedDate = new Date(`${guide.value.date}T00:00:00Z`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

useSeo({
  title: guide.value.title,
  description: guide.value.description,
  path: `/guides/${slug}`,
  type: "article",
});
useAdsense();
useJsonLd({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.value.title,
  description: guide.value.description,
  datePublished: guide.value.date,
  dateModified: guide.value.date,
  author: { "@type": "Person", name: "Colton Griffith" },
  publisher: { "@type": "Organization", name: site.name, url: `${SITE_URL}/` },
  mainEntityOfPage: `${SITE_URL}/guides/${slug}/`,
});
</script>
