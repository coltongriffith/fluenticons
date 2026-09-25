<template>
  <GuideArticle :slug="slug" />
</template>

<script setup>
const slug = String(useRoute().params.slug);
</script>
