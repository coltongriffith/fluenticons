<template>
  <main class="flex">
    <section class="flex-grow min-w-0">
      <BaseHero />
      <BaseNavbar />
      <NuxtPage />
      <SiteFooter />
    </section>
    <IconEditor />
  </main>
</template>

<script setup>
definePageMeta({ layout: "bare" });
</script>
