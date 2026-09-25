<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <span>Categories</span>
    </nav>
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Material icon categories</h1>
    <div class="prose dark:prose-invert max-w-3xl mb-8">
      <p>
        Google sorts every Material Symbol into one category. Pick one to see its icons, most used
        first, or browse the <NuxtLink to="/tag/">topics</NuxtLink> (Google's keywords) and the
        <NuxtLink to="/browse/">A–Z list</NuxtLink>.
      </p>
    </div>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <li v-for="c in list" :key="c.slug">
        <NuxtLink
          :to="`/category/${c.slug}/`"
          class="flex items-center gap-3 rounded-lg border dark:border-gray-700 p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IconMask :file="c.file" class="h-6 w-6 shrink-0" />
          <span class="text-sm font-medium truncate">{{ c.name }}</span>
          <span class="ml-auto text-xs text-gray-500">{{ c.count }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import categories from "~/generated/categories.json";

const { data: list } = await useAsyncData("categories", async () => {
  const bySlug = new Map((await loadIndex()).map((e) => [e.slug, e]));
  return Object.entries(categories)
    .map(([slug, c]) => {
      // Shown with its most used icon.
      const top = c.slugs.map((s) => bySlug.get(s)).find(Boolean);
      return { slug, name: c.name, count: c.slugs.length, file: top?.regular || top?.filled };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
});

useSeo({
  title: "Material icon categories",
  description: `Browse Google's Material Icons and Symbols by category: ${list.value.map((c) => c.name).slice(0, 6).join(", ")} and more. Free SVG, PNG and code.`,
  path: "/category",
});
useAdsense();
</script>
