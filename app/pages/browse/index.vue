<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Browse all Fluent icons A–Z</h1>
    <div class="prose dark:prose-invert max-w-3xl mb-8">
      <p>
        Every icon in the collection, listed alphabetically: {{ total.toLocaleString("en-US") }}
        designs from Microsoft's Fluent UI System Icons. Pick a letter to see its icons, then open
        any icon for downloads, code snippets and related icons. If you know roughly what you
        need, <NuxtLink to="/">searching</NuxtLink> is faster — it also matches Microsoft's
        keywords, so "trash" finds Delete.
      </p>
    </div>
    <LetterNav :letters="letters" />
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      <NuxtLink
        v-for="item in letters"
        :key="item.letter"
        :to="`/browse/${item.letter}/`"
        class="rounded-lg border dark:border-gray-700 p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <span class="text-xl font-semibold uppercase">{{ item.letter }}</span>
        <span class="text-gray-500 ml-2">{{ item.count }} icons</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: letters } = await useAsyncData("browse-letters", loadLetters);
const total = computed(() => letters.value.reduce((sum, l) => sum + l.count, 0));

useSeo({
  title: "Browse all Fluent UI System Icons A–Z",
  description: `Alphabetical index of ${roughCount(
    stats.designs
  )} Microsoft Fluent UI System Icons. Open any icon for SVG and PNG downloads in every size, code and related icons.`,
  path: "/browse",
});
useAdsense();
</script>
