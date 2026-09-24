<template>
  <div class="container mx-auto p-4 sm:p-8">
    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6" v-if="favorites.length">
      <IconCard v-for="icon in favorites" :key="icon.id" :icon="icon" />
    </div>
    <BaseFavoritesEmpty v-else />
  </div>
</template>

<script setup>
const { favorites } = useFavorites();
useSeo({ title: "Your favorite icons", path: "/favorites", noindex: true });
</script>
