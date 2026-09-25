<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/category/" class="hover:underline">Categories</NuxtLink>
      <span class="mx-2">/</span>
      <span>{{ data.name }}</span>
    </nav>
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">{{ data.name }} icons</h1>
    <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
      {{ icons.length }} Material Symbols in Google's {{ data.name }} category, most used first. Open
      any icon to download it as SVG or PNG in every style and weight, or copy SVG, JSX, MUI,
      Flutter and font code.
    </p>
    <ul class="icon-list grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
      <li v-for="icon in icons" :key="icon.slug">
        <NuxtLink
          :to="slugToPath(icon.slug)"
          class="rounded-lg border dark:border-gray-700 p-4 flex flex-col items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IconMask :file="icon.file" class="h-8 w-8" />
          <span class="text-xs text-center truncate w-full">{{ icon.name }}</span>
        </NuxtLink>
      </li>
    </ul>
    <p class="mt-10 text-sm">
      <NuxtLink to="/category/" class="underline">All categories</NuxtLink>
      <span class="mx-2 text-gray-400">·</span>
      <NuxtLink to="/tag/" class="underline">Topics</NuxtLink>
      <span class="mx-2 text-gray-400">·</span>
      <NuxtLink to="/browse/" class="underline">Browse A–Z</NuxtLink>
    </p>
  </div>
</template>

<script setup>
import categories from "~/generated/categories.json";

const name = String(useRoute().params.name);

const { data } = await useAsyncData(`category-${name}`, async () => {
  const entry = categories[name];
  if (!entry) return null;
  // The index is in popularity order.
  const wanted = new Set(entry.slugs);
  return {
    name: entry.name,
    icons: (await loadIndex())
      .filter((e) => wanted.has(e.slug))
      .map((e) => ({ slug: e.slug, name: e.name, file: e.regular || e.filled })),
  };
});
if (!data.value?.icons.length) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}
const icons = computed(() => data.value.icons);

const title = `${data.value.name} Material Icons & Symbols`;
const description = `${icons.value.length} free ${data.value.name} icons from Google's Material Symbols, most used first. Download SVG or PNG, or copy SVG, JSX, MUI and font code.`;
useSeo({ title, description, path: `/category/${name}` });
useAdsense();
useCollectionJsonLd({
  name: title,
  description,
  path: `/category/${name}`,
  items: icons.value.map((i) => ({ name: `${i.name} icon`, path: slugToPath(i.slug) })),
});
useJsonLd({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Icons", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Categories", item: `${SITE_URL}/category/` },
    { "@type": "ListItem", position: 3, name: data.value.name },
  ],
});
</script>
