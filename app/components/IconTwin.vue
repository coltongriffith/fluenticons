<template>
  <!-- The same icon on our other sites (scripts/cross-links.mjs). -->
  <section v-for="s in shown" :key="s.key" class="mt-12">
    <h2 class="text-2xl font-bold mb-4">{{ s.heading }}</h2>
    <a
      :href="`${s.base}${slugToPath(s.twin.slug)}`"
      class="inline-flex items-center gap-4 rounded-lg border dark:border-gray-700 p-4 pr-6 hover:bg-gray-100 dark:hover:bg-gray-800"
      @click="track('twin_click', { icon: slug, twin: s.twin.slug, site: s.key })"
    >
      <span class="h-12 w-12 flex-center rounded-md bg-white ring-1 ring-gray-900/5">
        <img :src="`${s.base}/icons/${s.twin.file}`" width="32" height="32" class="h-8 w-8" :alt="`${s.twin.name} icon`" loading="lazy" />
      </span>
      <span>
        <span class="block font-semibold">{{ s.twin.name }}</span>
        <span class="block text-sm text-gray-500 dark:text-gray-400">{{ s.note }}</span>
      </span>
    </a>
  </section>
</template>

<script setup>
import site from "~/site.js";
import { track } from "../utils/analytics";

const props = defineProps({
  // { [siteKey]: { slug, name, file } } from details.json
  twins: { type: Object, default: null },
  slug: { type: String, required: true },
});
const shown = computed(() =>
  (site.twinSites || [])
    .filter((s) => props.twins?.[s.key])
    .map((s) => ({ ...s, base: s.url.replace(/\/$/, ""), twin: props.twins[s.key] }))
);
</script>
