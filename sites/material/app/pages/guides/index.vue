<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Guides</h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-10">
      Practical walkthroughs for using Google's Material Symbols in real projects: HTML and
      CSS, React and Vue, customizing fill and weight, migrating from Material Icons, and licensing.
    </p>
    <div class="grid md:grid-cols-2 gap-6">
      <NuxtLink
        v-for="guide in guides"
        :key="guide.slug"
        :to="`${guide.path}/`"
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
  return all.map(({ slug, path, title, description }) => ({ slug, path, title, description }));
});

useSeo({
  title: "Guides: using Material Symbols",
  description:
    "How to use Google's Material Symbols in HTML, CSS, React and Vue — plus fill, weight, grade and optical size, migrating from Material Icons, and licensing.",
  path: "/guides",
});
useAdsense();
</script>
