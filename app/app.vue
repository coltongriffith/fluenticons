<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppToasts />
  </div>
</template>

<script setup>
onMounted(restoreFavorites);
</script>
