<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      <LazyIconCard
        v-for="(icon, i) in filteredIcons.slice(0, elementsToShow)"
        :key="i"
        :icon="icon"
        @setIcon="selectedIcon = icon"
        :selected="icon.name === selectedIcon.name"
      />
    </div>
    <div class="my-8">
      <base-not-found v-if="!filteredIcons.length" :search-query="searchQuery" />
      <button
        class="show-more-btn"
        @click="elementsToShow += 48"
        v-if="filteredIcons.length > elementsToShow"
      >
        Show More Icons
      </button>
      <div class="flex-center flex-col">
        <small class="mt-8">
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
        </small>
      </div>
    </div>
  </div>
</template>

<script setup>
import icons from '~/assets/icons/filled.json'

const { searchQuery, selectedIcon } = useAppState()
const elementsToShow = ref(48)

const filteredIcons = computed(() =>
  icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.value.toLowerCase().replace(' ', ''))
  )
)
</script>
