<template>
  <header class="border-b dark:border-gray-700">
    <div class="container mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
      <NuxtLink to="/" class="text-lg font-bold">Fluent Icons</NuxtLink>
      <nav class="flex items-center gap-1 sm:gap-2 text-sm" aria-label="Main">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="rounded-full px-2 sm:px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          {{ link.label }}
        </NuxtLink>
        <button
          class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle dark mode"
          @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
        >
          <ColorScheme>
            <template #placeholder>
              <FluentSvg ui="weather_moon_24_regular" class="h-5 w-5" />
            </template>
            <FluentSvg
              :ui="colorMode.value === 'dark' ? 'weather_sunny_24_regular' : 'weather_moon_24_regular'"
              class="h-5 w-5"
            />
          </ColorScheme>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode();
const links = [
  { to: "/", label: "Icons" },
  { to: "/browse/", label: "Browse" },
  { to: "/guides/", label: "Guides" },
  { to: "/about/", label: "About" },
];
</script>
