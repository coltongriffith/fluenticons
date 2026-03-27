<template>
  <div class="navbar-container">
      <p class="navbar-heading">
        <span class="text-lg font-medium">{{ page.title }} Icons</span>
        <span class="text-gray-600" v-if="page.subtitle">({{ page.subtitle }})</span>
      </p>
      <div class="navbar-controls">
        <div class="nav-heading-spacer"></div>
        <div class="navbar-search-input">
          <input
            type="text"
            class="focus:outline-none bg-transparent z-10 h-full rounded-l-full px-6 text-sm"
            placeholder="Search (Press / to focus)"
            ref="search"
            @input="search"
            autocomplete="new-password"/>
          <button
            class="h-10 w-10 flex-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 z-20 focus:outline-none focus:bg-gray-200"
            @click="$refs.search.focus()"
            aria-label="Search">
            <FluentIconFilledSearch class="text-gray-500 h-5 w-5" />
          </button>
        </div>
        <nuxt-link
          :to="altIcons.path"
          class="navbar-btn"
          :aria-label="`${altIcons.name} Icons`">
          <FluentIconFilledPositionBackward class="h-5 w-5" />
          <p class="text-sm">{{ altIcons.name }} Icons</p>
        </nuxt-link>
        <button @click="toggleDarkMode" class="navbar-btn" aria-label="Dark Mode">
          <FluentIconOutlinedWeatherSunny
            v-if="$colorMode.value === 'dark'"
            class="h-5 w-5"
          />
          <FluentIconOutlinedWeatherMoon v-else class="h-5 w-5" />
          <p class="text-sm">
            {{ $colorMode.value === "dark" ? "Light" : "Dark" }} Mode
          </p>
        </button>
        <nuxt-link to="/favorites" class="navbar-btn" aria-label="Favorites">
          <FluentIconOutlinedHeart class="h-5 w-5" />
          <p class="text-sm">Favorites</p>
        </nuxt-link>
      </div>
    <base-search-focus @keyup="focusSearch" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: null,
      debounce: null,
    };
  },
  computed: {
    isDarkMode() {
      return this.$colorMode.preference === "dark" ? true : false;
    },
    altIcons() {
      if (this.$route.path === "/outlined") {
        return {
          name: "Filled",
          path: "/",
        };
      } else {
        return {
          name: "Outlined",
          path: "/outlined",
        };
      }
    },
    page() {
      switch (this.$route.path) {
        case "/outlined":
          return { title: "Outlined", subtitle: "2 px stroked" };
        case "/favorites":
          return { title: "Favorites" };
        default:
          return { title: "Filled", subtitle: "2 px filled" };
      }
    },
  },
  methods: {
    search(e) {
      this.query = e.target.value;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.$emit("input", e.target.value);
      }, 600);
    },
    focusSearch(e) {
      if (e.key === "/") {
        this.$refs.search.focus();
      }
    },
    toggleDarkMode() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    },
  },
};
</script>
