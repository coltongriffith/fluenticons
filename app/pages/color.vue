<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <span>Color</span>
    </nav>
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Color Fluent icons</h1>
    <div class="prose dark:prose-invert max-w-3xl mb-8">
      <p>
        {{ icons.length }} icons from Microsoft's Fluent UI System Icons also come in a full-color
        style, with the soft gradients you see in Windows 11 and Microsoft 365. They're built for
        places where an icon carries more weight — empty states, onboarding, app tiles and
        feature highlights — and pair with the <NuxtLink to="/">filled</NuxtLink> and
        <NuxtLink to="/outlined/">outlined</NuxtLink> styles of the same design.
      </p>
      <p>
        Open an icon to download it as SVG or PNG in every size Microsoft draws, or to copy the
        React component (for example <code>{{ example }}</code>). Color icons keep their own
        colors, so they don't follow <code>currentColor</code> like the other styles.
      </p>
    </div>
    <ul class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
      <li v-for="icon in icons" :key="icon.slug">
        <NuxtLink
          :to="slugToPath(icon.slug)"
          class="rounded-lg border dark:border-gray-700 p-4 flex flex-col items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <img :src="`/icons/${icon.file}`" width="40" height="40" loading="lazy" alt="" class="h-10 w-10" />
          <span class="text-xs text-center truncate w-full">{{ icon.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("color-icons", () =>
  import("~/generated/color.json").then(({ default: rows }) =>
    rows.map(([slug, name, file]) => ({ slug, name, file }))
  )
);
const icons = computed(() => data.value || []);
const example = computed(() => (icons.value[0] ? reactName(icons.value[0].slug, 24, "color") : ""));

const description = `${icons.value.length} full-color Microsoft Fluent UI System Icons with gradients. Free SVG and PNG downloads in every size, plus React code.`;
useSeo({ title: "Color Fluent UI System Icons", description, path: "/color" });
useAdsense();
useCollectionJsonLd({
  name: "Color Fluent icons",
  description,
  path: "/color",
  items: icons.value.map((i) => ({ name: `${i.name} icon`, path: slugToPath(i.slug) })),
});
</script>
