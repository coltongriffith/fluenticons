<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <span>Topics</span>
    </nav>
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Browse Fluent icons by topic</h1>
    <div class="prose dark:prose-invert max-w-3xl mb-8">
      <p>
        Microsoft tags every Fluent UI System Icon with keywords that describe what it means, not
        just what it shows. These are the {{ tags.length }} topics shared by at least ten icons.
        Pick one to see every icon for that idea, or <NuxtLink to="/browse/">browse A–Z</NuxtLink>.
      </p>
    </div>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      <li v-for="tag in tags" :key="tag.slug">
        <NuxtLink
          :to="`/tag/${tag.slug}/`"
          class="flex items-center justify-between gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span class="text-sm truncate capitalize">{{ tag.name }}</span>
          <span class="text-xs text-gray-500">{{ tag.count }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("tags", async () =>
  Object.entries(await loadTags()).map(([slug, t]) => ({ slug, name: t.name, count: t.slugs.length }))
);
const tags = computed(() => data.value || []);

useSeo({
  title: "Fluent icons by topic",
  description: `Browse Microsoft Fluent UI System Icons by topic: ${tags.value.length} keywords such as arrows, charts, documents and security. Free SVG, PNG and code.`,
  path: "/tag",
});
useAdsense();
</script>
