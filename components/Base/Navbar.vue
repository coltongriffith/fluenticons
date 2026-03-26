<template>
  <div
    class="h-[75px] border-t border-b sticky top-0 z-50 dark:border-gray-700 flex items-center justify-between px-8 flex-wrap navbar-frosted"
  >
    <p>
      <span class="text-lg font-medium">{{ page.title }} Icons</span>
      <span class="text-gray-600" v-if="page.subtitle">({{ page.subtitle }})</span>
    </p>
    <div class="flex-space-x-4">
      <div
        class="relative flex items-center overflow-hidden rounded-full bg-gray-50 dark:bg-gray-700 focus-within:bg-gray-100 dark:focus-within:bg-gray-800"
      >
        <input
          type="text"
          class="focus:outline-none bg-transparent z-10 h-full rounded-l-full px-6 text-sm"
          placeholder="Search (Press / to focus)"
          ref="searchInput"
          @input="onSearch"
          autocomplete="new-password"
        />
        <button
          class="h-10 w-10 flex-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 z-20 focus:outline-none focus:bg-gray-200"
          @click="searchInput.focus()"
          aria-label="Search"
        >
          <FluentIconFilledSearch class="text-gray-500 h-5 w-5" />
        </button>
      </div>
      <NuxtLink :to="altIcons.path" class="navbar-btn" :aria-label="`${altIcons.name} Icons`">
        <FluentIconFilledPositionBackward class="h-5 w-5" />
        <p class="text-sm">{{ altIcons.name }} Icons</p>
      </NuxtLink>
      <button @click="toggleDarkMode" class="navbar-btn" aria-label="Dark Mode">
        <FluentIconOutlinedWeatherSunny v-if="colorMode.value === 'dark'" class="h-5 w-5" />
        <FluentIconOutlinedWeatherMoon v-else class="h-5 w-5" />
        <p class="text-sm">{{ colorMode.value === 'dark' ? 'Light' : 'Dark' }} Mode</p>
      </button>
      <NuxtLink to="/favorites" class="navbar-btn" aria-label="Favorites">
        <FluentIconOutlinedHeart class="h-5 w-5" />
        <p class="text-sm">Favorites</p>
      </NuxtLink>
    </div>
    <base-search-focus @keyup="focusSearch" />
  </div>
</template>

<script setup>
const route = useRoute()
const colorMode = useColorMode()
const searchInput = ref(null)
const { searchQuery } = useAppState()
let debounce = null

const altIcons = computed(() => {
  if (route.path === '/outlined') return { name: 'Filled', path: '/' }
  return { name: 'Outlined', path: '/outlined' }
})

const page = computed(() => {
  switch (route.path) {
    case '/outlined': return { title: 'Outlined', subtitle: '2 px stroked' }
    case '/favorites': return { title: 'Favorites' }
    default: return { title: 'Filled', subtitle: '2 px filled' }
  }
})

function onSearch(e) {
  clearTimeout(debounce)
  debounce = setTimeout(() => {
    searchQuery.value = e.target.value
  }, 600)
}

function focusSearch(e) {
  if (e.key === '/') searchInput.value?.focus()
}

function toggleDarkMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>
