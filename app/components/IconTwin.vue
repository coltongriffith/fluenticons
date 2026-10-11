<template>
  <!-- The same icon on our other site (scripts/cross-links.mjs). -->
  <section v-if="twin && site.sister" class="mt-12">
    <h2 class="text-2xl font-bold mb-4">{{ site.sister.twinHeading }}</h2>
    <a
      :href="`${base}${slugToPath(twin.slug)}`"
      class="inline-flex items-center gap-4 rounded-lg border dark:border-gray-700 p-4 pr-6 hover:bg-gray-100 dark:hover:bg-gray-800"
      @click="track('twin_click', { icon: slug, twin: twin.slug })"
    >
      <span class="h-12 w-12 flex-center rounded-md bg-white ring-1 ring-gray-900/5">
        <img :src="`${base}/icons/${twin.file}`" width="32" height="32" class="h-8 w-8" :alt="`${twin.name} icon`" loading="lazy" />
      </span>
      <span>
        <span class="block font-semibold">{{ twin.name }}</span>
        <span class="block text-sm text-gray-500 dark:text-gray-400">{{ site.sister.twinNote }}</span>
      </span>
    </a>
  </section>
</template>

<script setup>
import site from "~/site.js";
import { track } from "../utils/analytics";

defineProps({
  twin: { type: Object, default: null },
  slug: { type: String, required: true },
});
const base = site.sister?.url.replace(/\/$/, "");
</script>
