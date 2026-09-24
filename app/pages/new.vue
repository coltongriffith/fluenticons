<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:underline">Icons</NuxtLink>
      <span class="mx-2">/</span>
      <span>New</span>
    </nav>
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">New Fluent icons</h1>
    <div class="prose dark:prose-invert max-w-3xl mb-8">
      <p>
        Microsoft adds new designs to Fluent UI System Icons with almost every release. This page
        lists the icons added to Fluenticons in each update, newest first — the site checks for a
        new release every week. Follow along with the
        <a href="/feed.xml">RSS feed</a>, or <NuxtLink to="/browse/">browse every icon A–Z</NuxtLink>.
      </p>
    </div>
    <section v-for="update in updates" :id="update.date" :key="update.date" class="mb-12">
      <h2 class="text-2xl font-bold mb-4">
        {{ update.label }}
        <span class="text-base font-normal text-gray-500 ml-2">
          {{ update.icons.length }} new icon{{ update.icons.length === 1 ? "" : "s" }}
        </span>
      </h2>
      <ul class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
        <li v-for="icon in update.icons" :key="icon.slug">
          <NuxtLink
            :to="slugToPath(icon.slug)"
            class="rounded-lg border dark:border-gray-700 p-4 flex flex-col items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <IconMask v-if="icon.file" :file="icon.file" class="h-8 w-8" />
            <span v-else class="h-8 w-8"></span>
            <span class="text-xs text-center truncate w-full">{{ icon.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("new-icons", () =>
  import("~/generated/new.json").then(({ default: updates }) =>
    updates.map(({ date, icons }) => ({
      date,
      label: new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      }),
      icons: icons.map(([slug, name, file]) => ({ slug, name, file: file || "" })),
    }))
  )
);
const updates = computed(() => data.value || []);
if (!updates.value.length) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const latest = updates.value[0];
const description = `The newest Microsoft Fluent UI System Icons: ${latest.icons.length} added ${latest.label}. Free SVG, PNG and code for React, Flutter, Blazor and more.`;
useSeo({ title: "New Fluent icons", description, path: "/new" });
useAdsense();
useCollectionJsonLd({
  name: "New Fluent icons",
  description,
  path: "/new",
  items: latest.icons.map((i) => ({ name: `${i.name} icon`, path: slugToPath(i.slug) })),
});
</script>
