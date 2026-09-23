<template>
  <div>
    <NuxtPage />
    <AppToasts />
  </div>
</template>

<script setup>
onMounted(restoreFavorites);
</script>
