<template>
  <main class="min-h-screen flex-center flex-col space-y-4 p-8 text-center">
    <h1 class="text-5xl font-bold">{{ error?.statusCode || 404 }}</h1>
    <p class="text-gray-500">
      {{ error?.statusCode === 404 ? "This page could not be found." : "Something went wrong." }}
    </p>
    <button class="show-more-btn" @click="clearError({ redirect: '/' })">{{ site.errorBack }}</button>
  </main>
</template>

<script setup>
import site from "~/site.js";

defineProps({ error: { type: Object, default: null } });
useHead({ title: `Page not found | ${site.name}`, meta: [{ name: "robots", content: "noindex" }] });
</script>
