<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Material icons list A–Z</h1>
    <div class="prose dark:prose-invert max-w-3xl mb-8">
      <p>
        Every icon in the collection, listed alphabetically: {{ total.toLocaleString("en-US") }}
        symbols from Google's Material Symbols. Pick a letter to see its icons, then open
        any icon for downloads, code snippets and related icons. If you know roughly what you
        need, <NuxtLink to="/">searching</NuxtLink> is faster — it also matches Google's
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
  title: "Material icons list A–Z",
  description: `The full list of ${roughCount(
    stats.designs
  )} Google Material Icons and Symbols, A–Z. Open any icon for SVG and PNG in every style and weight, plus code.`,
  path: "/browse",
});
useAdsense();
</script>
