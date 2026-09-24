<template>
  <footer class="border-t dark:border-gray-700 mt-16">
    <div class="container mx-auto px-4 sm:px-8 py-10 text-sm text-gray-500 dark:text-gray-400">
      <nav class="flex flex-wrap gap-x-6 gap-y-2 mb-6" aria-label="Footer">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="hover:underline">
          {{ link.label }}
        </NuxtLink>
      </nav>
      <p class="mb-2">
        {{ site.footerCopyright }}
        <NuxtLink to="/license/" class="underline">{{ site.footerLicense }}</NuxtLink>.
        {{ site.footerDisclaimer }}
      </p>
      <p>© {{ year }} {{ site.name }}</p>
    </div>
  </footer>
</template>

<script setup>
import site from "~/site.js";

const year = new Date().getFullYear();
const links = site.footerLinks;
</script>
