<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/browse/" class="hover:underline">Browse</NuxtLink>
      <span class="mx-2">/</span>
      <span class="uppercase">{{ letter }}</span>
    </nav>
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">
      Material icons starting with <span class="uppercase">{{ letter }}</span>
    </h1>
    <p class="text-gray-600 dark:text-gray-300 mb-6">
      {{ icons.length }} icons from Google's Material Symbols. Select an icon for
      downloads and code.
    </p>
    <LetterNav :letters="data.letters" :current="letter" class="mb-8" />
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      <li v-for="icon in icons" :key="icon.slug">
        <NuxtLink
          :to="slugToPath(icon.slug)"
          class="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IconMask v-if="icon.file" :file="icon.file" class="h-6 w-6 flex-shrink-0" />
          <span v-else class="h-6 w-6 flex-shrink-0"></span>
          <span class="text-sm truncate">{{ icon.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();
const letter = String(route.params.letter);

const { data } = await useAsyncData(`browse-${letter}`, async () => {
  const index = await loadIndex();
  return {
    letters: await loadLetters(),
    icons: index
      .filter((e) => letterOf(e.name) === letter)
      .map((e) => ({ slug: e.slug, name: e.name, file: e.regular || e.filled || e.preview })),
  };
});
if (!data.value?.icons.length) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}
const icons = computed(() => data.value.icons);
const label = letter === "0-9" ? "a number" : `“${letter.toUpperCase()}”`;

const description = `All ${data.value.icons.length} Google Material Symbols whose names start with ${label}. Free SVG, PNG and React code for each icon.`;
useSeo({
  title: `Material icons starting with ${letter.toUpperCase()}`,
  description,
  path: `/browse/${letter}`,
});
useAdsense();
useCollectionJsonLd({
  name: `Material icons starting with ${letter.toUpperCase()}`,
  description,
  path: `/browse/${letter}`,
  items: icons.value.map((i) => ({ name: `${i.name} icon`, path: slugToPath(i.slug) })),
});
</script>
