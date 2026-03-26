<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-4 lg:grid-cols-6 gap-6" v-if="store.favorites.length">
      <LazyIconCard
        v-for="(icon, i) in store.favorites"
        :key="i"
        :icon="icon"
        @setIcon="selectedIcon = icon"
        :selected="icon.name === selectedIcon.name"
      />
    </div>
    <base-favorites-empty v-else />
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/stores/favorites'

const store = useFavoritesStore()
const { selectedIcon } = useAppState()
</script>
