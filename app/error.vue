<template>
  <main class="min-h-screen flex-center flex-col space-y-4 p-8 text-center">
    <h1 class="text-5xl font-bold">{{ error?.statusCode || 404 }}</h1>
    <p class="text-gray-500">
      {{ error?.statusCode === 404 ? "This page could not be found." : "Something went wrong." }}
    </p>
    <!-- A plain form, so it works before the page is interactive: the grid reads ?q=. -->
    <form v-if="error?.statusCode === 404" action="/" method="get" role="search" class="flex w-full max-w-md gap-2">
      <input
        type="search"
        name="q"
        required
        placeholder="Search icons"
        aria-label="Search icons"
        class="form-input flex-1 min-w-0 rounded-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 px-5 text-sm"
      />
      <button class="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2">Search</button>
    </form>
    <button class="show-more-btn" @click="clearError({ redirect: '/' })">{{ site.errorBack }}</button>
  </main>
</template>

<script setup>
import site from "~/site.js";

defineProps({ error: { type: Object, default: null } });
useHead({ title: `Page not found | ${site.name}`, meta: [{ name: "robots", content: "noindex" }] });
</script>
