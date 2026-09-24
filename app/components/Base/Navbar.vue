<template>
  <div
    class="min-h-[75px] lg:h-[75px] py-3 lg:py-0 gap-3 border-t border-b sticky top-0 z-50 dark:border-gray-700 flex items-center justify-between px-4 sm:px-8 flex-wrap navbar-frosted"
  >
    <p>
      <span class="text-lg font-medium">{{ page.title }} Icons</span>
      <span class="text-gray-600" v-if="page.subtitle"
        >&nbsp;({{ page.subtitle }})</span
      >
      <a
        v-if="site.sister"
        :href="site.sister.url"
        class="ml-3 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:underline whitespace-nowrap"
        @click="track('sister_site_click', { site: site.sister.label, source: 'toolbar' })"
      >
        {{ site.sister.label }}<FluentSvg ui="open_24_regular" class="h-3.5 w-3.5" />
      </a>
    </p>
    <div class="flex items-center flex-wrap gap-3 lg:gap-4">
      <div
        class="relative flex items-center overflow-hidden rounded-full bg-gray-50 dark:bg-gray-700 focus-within:bg-gray-100 dark:focus-within:bg-gray-800"
      >
        <input
          type="text"
          class="focus:outline-none bg-transparent z-10 h-full rounded-l-full px-6 text-sm"
          placeholder="Search (Press / to focus)"
          aria-label="Search icons"
          ref="search"
          :value="searchQuery"
          @input="onSearch"
          autocomplete="off"
        />
        <button
          class="h-10 w-10 flex-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 z-20 focus:outline-none focus:bg-gray-200"
          @click="search.focus()"
          aria-label="Search"
        >
          <FluentSvg ui="search_24_filled" class="text-gray-500 h-5 w-5" />
        </button>
      </div>
      <NuxtLink
        v-for="link in altIcons"
        :key="link.path"
        :to="link.path"
        class="navbar-btn"
        :aria-label="`${link.name} Icons`"
      >
        <FluentSvg ui="position_backward_24_filled" class="h-5 w-5" />
        <p class="text-sm hidden md:block">{{ link.name }} Icons</p>
      </NuxtLink>
      <button @click="toggleDarkMode" class="navbar-btn" aria-label="Dark Mode">
        <ColorScheme>
          <template #placeholder>
            <FluentSvg ui="weather_moon_24_regular" class="h-5 w-5" />
          </template>
          <FluentSvg
            v-if="colorMode.value === 'dark'"
            ui="weather_sunny_24_regular"
            class="h-5 w-5"
          />
          <FluentSvg v-else ui="weather_moon_24_regular" class="h-5 w-5" />
        </ColorScheme>
        <p class="text-sm hidden md:block">
          <ColorScheme placeholder="Dark">{{
            colorMode.value === "dark" ? "Light" : "Dark"
          }}</ColorScheme>
          Mode
        </p>
      </button>
      <NuxtLink to="/favorites/" class="navbar-btn" aria-label="Favorites">
        <FluentSvg ui="heart_24_regular" class="h-5 w-5" />
        <p class="text-sm hidden md:block">Favorites</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { setSearchTerm, track } from "../../utils/analytics";
import site from "~/site.js";

const route = useRoute();
const colorMode = useColorMode();
const searchQuery = useSearchQuery();
const search = ref(null);

// The grid pages from site.js; the first one is the homepage.
const favoritesPage = computed(() => route.path.startsWith("/favorites"));
const currentGrid = computed(
  () =>
    site.grids.find((g) => g.path !== "/" && route.path.startsWith(g.path.replace(/\/$/, ""))) ||
    site.grids[0]
);
const altIcons = computed(() =>
  site.grids
    .filter((g) => favoritesPage.value || g !== currentGrid.value)
    .map((g) => ({ name: g.title, path: g.path }))
);

const page = computed(() => {
  if (favoritesPage.value) return { title: "Favorites" };
  return { title: currentGrid.value.title, subtitle: currentGrid.value.subtitle };
});

let debounce;
function onSearch(e) {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    searchQuery.value = e.target.value;
    const term = e.target.value.trim();
    setSearchTerm(term.length >= 2 ? term.toLowerCase() : "");
    if (term.length >= 2) track("search", { search_term: term.toLowerCase() });
  }, 600);
}

function toggleDarkMode() {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
}

function focusSearch(e) {
  if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
    search.value.focus();
  }
}
onMounted(() => window.addEventListener("keyup", focusSearch));
onBeforeUnmount(() => window.removeEventListener("keyup", focusSearch));
</script>
