<template>
  <footer class="border-t dark:border-gray-700 mt-16">
    <div class="container mx-auto px-4 sm:px-8 py-10 text-sm text-gray-500 dark:text-gray-400">
      <nav class="flex flex-wrap gap-x-6 gap-y-2 mb-6" aria-label="Footer">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="hover:underline">
          {{ link.label }}
        </NuxtLink>
      </nav>
      <p class="mb-2">
        Fluent UI System Icons are © Microsoft Corporation and released under the
        <NuxtLink to="/license" class="underline">MIT License</NuxtLink>.
        Fluenticons is an independent project and is not affiliated with or endorsed by Microsoft.
      </p>
      <p>© {{ year }} Fluenticons</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
const links = [
  { to: "/", label: "Filled icons" },
  { to: "/outlined", label: "Outlined icons" },
  { to: "/browse", label: "Browse A–Z" },
  { to: "/guides", label: "Guides" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/license", label: "License" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy-policy", label: "Privacy" },
];
</script>
