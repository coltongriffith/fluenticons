<template>
  <div class="container mx-auto p-4 sm:p-8">
    <div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-6">
      <IconCard
        v-for="icon in filteredIcons.slice(0, elementsToShow)"
        :key="icon.id"
        :icon="icon"
      />
    </div>
    <div class="my-8">
      <BaseNotFound
        v-if="!filteredIcons.length"
        :search-query="searchQuery"
      />
      <button
        class="show-more-btn"
        @click="elementsToShow += PAGE_SIZE"
        v-if="filteredIcons.length > elementsToShow"
      >
        Show More Icons
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, required: true },
});

const searchQuery = useSearchQuery();
const elementsToShow = ref(PAGE_SIZE);

// The prerendered page only carries the first page of icons; the full list
// loads right after hydration (needed for search and "Show More").
const { data: firstPage } = await useAsyncData(
  `icons-${props.variant}`,
  async () => (await loadIcons(props.variant)).slice(0, PAGE_SIZE)
);
const allIcons = shallowRef(null);
const route = useRoute();
// Search results (?q=…) share this page's HTML and canonical URL; keep them
// out of search indexes.
useHead({ meta: computed(() => (route.query.q ? [{ name: "robots", content: "noindex, follow" }] : [])) });
onMounted(async () => {
  // Links like /?q=flame (from icon keyword tags) prefill the search.
  if (route.query.q) searchQuery.value = String(route.query.q);
  allIcons.value = await loadIcons(props.variant);
});

const filteredIcons = computed(() => {
  const icons = allIcons.value || firstPage.value || [];
  return icons.filter((icon) => matchesQuery(icon, searchQuery.value));
});

watch(searchQuery, () => {
  elementsToShow.value = PAGE_SIZE;
});
</script>
