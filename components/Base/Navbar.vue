<template>
  <div
    class="
      h-16
      border-t border-b
      sticky
      top-0
      z-50
      bg-white bg-opacity-50
      dark:bg-gray-900 dark:bg-opacity-50
      dark:border-gray-700
      backdrop-filter backdrop-blur
      flex-between
      px-8
    "
  >
    <p>
      <span class="text-lg font-medium">{{ iconType.style }} Icons</span>
      <span class="text-gray-600">({{ iconType.subtitle }})</span>
    </p>
    <div class="flex-space-x-4">
      <div
        class="
          relative
          flex
          items-center
          overflow-hidden
          rounded-full
          bg-gray-50
          dark:bg-gray-700
          focus-within:bg-gray-100
          dark:focus-within:bg-gray-800
        "
      >
        <input
          type="text"
          class="
            focus:outline-none
            bg-transparent
            z-10
            h-full
            rounded-l-full
            px-6
            text-sm
          "
          placeholder="Search (Press / to focus)"
          ref="search"
          @input="search"
        />
        <button
          class="
            h-10
            w-10
            flex-center
            bg-gray-100
            dark:bg-gray-800
            hover:bg-gray-200
            z-20
            focus:outline-none
            focus:bg-gray-200
          "
          @click="$refs.search.focus()"
          aria-label="Search"
        >
          <FluentIconFilledSearch class="text-gray-500 h-5 w-5" />
        </button>
      </div>
      <nuxt-link
        :to="altIcons.path"
        class="navbar-btn"
        v-tooltip="`Switch to ${altIcons.name} Icons`"
        :aria-label="`${altIcons.name} Icons`"
      >
        <FluentIconFilledPositionBackward class="text-gray-500 h-5 w-5" />
      </nuxt-link>
      <button
        @click="toggleDarkMode"
        class="navbar-btn"
        v-tooltip="'Dark Mode'"
        aria-label="Dark Mode"
      >
        <FluentIconOutlinedWeatherMoon class="text-gray-500 h-5 w-5" />
      </button>
      <nuxt-link
        to="/favorites"
        class="navbar-btn"
        v-tooltip="'Favorites'"
        aria-label="Favorites"
      >
        <FluentIconOutlinedHeart class="text-gray-500 h-5 w-5" />
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
    iconType() {
      if (this.$route.path === "/outlined")
        return { style: "Outlined", subtitle: "2 px stroked" };
      else return { style: "Filled", subtitle: "Solid filled style" };
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