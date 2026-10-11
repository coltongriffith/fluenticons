<template>
  <!-- Links from the homepage into icon, category and topic pages (home.json). -->
  <div class="max-w-5xl mb-12 space-y-10">
    <section v-for="block in blocks" :key="block.label">
      <div class="flex items-baseline justify-between gap-4 mb-4">
        <h2 class="text-2xl font-bold">{{ block.label }}</h2>
        <NuxtLink v-if="block.more" :to="block.more.to" class="text-sm text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap">{{ block.more.label }}</NuxtLink>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <NuxtLink
          v-for="[slug, name, file] in block.icons"
          :key="slug"
          :to="slugToPath(slug)"
          class="rounded-lg border dark:border-gray-700 p-3 flex flex-col items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IconMask :file="file" class="h-7 w-7" />
          <span class="text-xs text-center truncate w-full">{{ name }}</span>
        </NuxtLink>
      </div>
    </section>

    <section v-if="home.groups.length">
      <div class="flex items-baseline justify-between gap-4 mb-4">
        <h2 class="text-2xl font-bold">{{ home.groupsLabel }}</h2>
        <NuxtLink :to="groupsIndex" class="text-sm text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap">All {{ home.groupsLabel.toLowerCase() }}</NuxtLink>
      </div>
      <ul class="flex flex-wrap gap-2">
        <li v-for="[path, name, count] in home.groups" :key="path">
          <NuxtLink :to="path" class="inline-block rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
            {{ name }} <span class="text-gray-500">{{ count }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import home from "~/generated/home.json";

const blocks = [
  { label: home.popularLabel, icons: home.popular, more: { to: "/browse/", label: "Browse A–Z" } },
  ...(home.newest.length ? [{ label: "New icons", icons: home.newest, more: { to: "/new/", label: "All new icons" } }] : []),
];
const groupsIndex = home.groups[0]?.[0].startsWith("/category/") ? "/category/" : "/tag/";
</script>
