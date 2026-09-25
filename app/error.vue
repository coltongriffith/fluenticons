<template>
  <main class="min-h-screen flex-center flex-col space-y-4 p-8 text-center">
    <h1 class="text-5xl font-bold">{{ error?.statusCode || 404 }}</h1>
    <p class="text-gray-500">
      {{ error?.statusCode === 404 ? "This page could not be found." : "Something went wrong." }}
    </p>
    <!-- A plain form, so it works before the page is interactive: the grid reads ?q=. -->
    <form
      v-if="error?.statusCode === 404"
      action="/"
      method="get"
      role="search"
      class="flex w-full max-w-md items-center overflow-hidden rounded-full bg-gray-50 dark:bg-gray-700 focus-within:bg-gray-100 dark:focus-within:bg-gray-800"
    >
      <input
        type="search"
        name="q"
        required
        placeholder="Search icons"
        aria-label="Search icons"
        class="flex-1 min-w-0 h-10 bg-transparent px-6 text-sm focus:outline-none"
      />
      <button class="h-10 w-12 flex-center border-l border-gray-200 dark:border-gray-600 text-gray-500" aria-label="Search">
        <FluentSvg ui="search_24_filled" class="h-5 w-5" /><span class="sr-only">Search</span>
      </button>
    </form>
    <button class="show-more-btn" @click="clearError({ redirect: '/' })">{{ site.errorBack }}</button>
  </main>
</template>

<script setup>
import site from "~/site.js";

defineProps({ error: { type: Object, default: null } });
useHead({ title: `Page not found | ${site.name}`, meta: [{ name: "robots", content: "noindex" }] });
</script>
