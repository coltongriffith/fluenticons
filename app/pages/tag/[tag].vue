<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/tag/" class="hover:underline">Topics</NuxtLink>
      <span class="mx-2">/</span>
      <span class="capitalize">{{ data.name }}</span>
    </nav>
    <h1 class="text-3xl sm:text-4xl font-bold mb-4 capitalize">{{ data.name }} icons</h1>
    <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
      {{ icons.length }} Fluent UI System Icons that Microsoft tags “{{ data.name }}”. Open any
      icon to download it as SVG or PNG in every size, or copy code for React, Flutter, Blazor
      and more.
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
      <NuxtLink to="/tag/" class="underline">All topics</NuxtLink>
      <span class="mx-2 text-gray-400">·</span>
      <NuxtLink to="/browse/" class="underline">Browse A–Z</NuxtLink>
    </p>
  </div>
</template>

<script setup>
const route = useRoute();
const tag = String(route.params.tag);

const { data } = await useAsyncData(`tag-${tag}`, async () => {
  const entry = (await loadTags())[tag];
  if (!entry) return null;
  const bySlug = new Map((await loadIndex()).map((e) => [e.slug, e]));
  return {
    name: entry.name,
    icons: entry.slugs
      .map((s) => bySlug.get(s))
      .filter(Boolean)
      .map((e) => ({ slug: e.slug, name: e.name, file: e.regular || e.filled })),
  };
});
if (!data.value?.icons.length) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}
const icons = computed(() => data.value.icons);

const title = data.value.name.charAt(0).toUpperCase() + data.value.name.slice(1);
const description = `${icons.value.length} free ${data.value.name} icons from Microsoft's Fluent UI System Icons. Download SVG or PNG in every size, or copy React, Flutter and Blazor code.`;
useSeo({ title: `${title} icons`, description, path: `/tag/${tag}` });
useAdsense();
useCollectionJsonLd({
  name: `${title} icons`,
  description,
  path: `/tag/${tag}`,
  items: icons.value.map((i) => ({ name: `${i.name} icon`, path: slugToPath(i.slug) })),
});
</script>
