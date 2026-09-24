<template>
  <nav class="flex flex-wrap gap-2" aria-label="Browse by letter">
    <NuxtLink
      v-for="item in letters"
      :key="item.letter"
      :to="`/browse/${item.letter}/`"
      class="min-w-[2.5rem] text-center rounded-lg border dark:border-gray-700 px-3 py-2 uppercase hover:bg-gray-100 dark:hover:bg-gray-800"
      :class="{ 'bg-gray-100 dark:bg-gray-800 font-semibold': item.letter === current }"
    >
      {{ item.letter }}
    </NuxtLink>
  </nav>
</template>

<script setup>
defineProps({
  letters: { type: Array, required: true },
  current: { type: String, default: "" },
});
</script>
