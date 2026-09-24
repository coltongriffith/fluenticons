<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Guides</h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-10">
      Practical walkthroughs for using Microsoft's Fluent UI System Icons in real projects:
      React, Vue, plain HTML and CSS, accessibility, licensing and performance.
    </p>
    <div class="grid md:grid-cols-2 gap-6">
      <NuxtLink
        v-for="guide in guides"
        :key="guide.slug"
        :to="`/guides/${guide.slug}/`"
        class="rounded-lg border dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <h2 class="text-xl font-semibold mb-2">{{ guide.title }}</h2>
        <p class="text-gray-600 dark:text-gray-300">{{ guide.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: guides } = await useAsyncData("guides", async () => {
  const { default: all } = await import("~/generated/guides.json");
  return all.map(({ slug, title, description }) => ({ slug, title, description }));
});

useSeo({
  title: "Guides: using Fluent UI System Icons",
  description:
    "How to use Microsoft's Fluent UI System Icons in React, Vue, HTML and CSS — plus color, sizing, accessibility, licensing and SVG performance tips.",
  path: "/guides",
});
useAdsense();
</script>
