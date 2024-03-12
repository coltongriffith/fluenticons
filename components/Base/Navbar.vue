<template>
  <div class="h-[75px] border-t border-b sticky top-0 z-50 dark:border-gray-700 flex items-center justify-between px-8 flex-wrap navbar-frosted">
    <div class="flex">
      <div class="text-lg font-medium my-auto">{{ page.title }} Icons</div>
      <div class="text-gray-600 my-auto ml-2" v-if="page.subtitle">
        ({{ page.subtitle }})
      </div>
      <button
        class="navbar-type-btn ml-4"
        :class="{'bg-gray-200 dark:bg-gray-700': type === 'fluent', 'bg-gray-100 dark:bg-gray-800': type !== 'fluent'}"
        @click="type = 'fluent'"
      >
        Fluent Icons
      </button>
      <button
        class="navbar-type-btn ml-2"
        :class="{'bg-gray-200 dark:bg-gray-700': type === 'material', 'bg-gray-100 dark:bg-gray-800': type !== 'material'}"
        @click="type = 'material'"
      >
        Material Icons
      </button>
    </div>
    <div class="flex flex-space-x-4">
      <div class="relative flex items-center rounded-full bg-gray-50 dark:bg-gray-700 max-w-full flex-grow">
        <div class="dropdown-menu-container">
          <div class="focus:outline-none bg-transparent z-10 h-10 rounded-l-full px-6 text-sm appearance-none w-full flex items-center justify-between">
            <span class="dropdown-menu-text mr-2">{{ selectedCategory || 'Select a Category' }}</span>
            <button class="dropdown-menu-icon-btn bg-gray-100 dark:bg-gray-800 hover:bg-gray-200" @click="toggleDropdown">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                :class="{'rotate-180': isDropdownOpen}"
                class="h-5 w-5 text-gray-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
          </div>
          <transition name="fade">
            <ul v-show="isDropdownOpen" class="dropdown-menu search-dropdown-menu">
              <li v-for="category in dropdownCategories" :key="category" @click="selectCategory(category)" class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                {{ category }}
              </li>
            </ul>
          </transition>
        </div>
      </div>
      <div class="relative flex items-center overflow-hidden rounded-full bg-gray-50 dark:bg-gray-700 focus-within:bg-gray-100 dark:focus-within:bg-gray-800">
        <form autoComplete="false">
          <input
            type="text"
            class="focus:outline-none bg-transparent z-10 h-full rounded-l-full px-6 text-sm"
            placeholder="Search (Press / to focus)"
            ref="search"
            @input="search"
            autoComplete="none"
          />
        </form>
        <button
          class="h-10 w-10 flex-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 z-20 focus:outline-none focus:bg-gray-200"
          @click="$refs.search.focus()"
          aria-label="Search"
        >
          <FluentIconFilledSearch class="text-gray-500 h-5 w-5" />
        </button>
      </div>
      <nuxt-link :to="altIcons.path" class="navbar-btn" :aria-label="`${altIcons.name} Icons`">
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
          {{ $colorMode.value === "dark" ? "Light" : 'Dark' }} Mode
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
      type: "fluent",
      selectedCategory: null,
      isDropdownOpen: false,
      fluentCategories: [
        "Accessibility",
        "Animals",
        "Arrows",
        "Audio",
        "Business",
        "Communication",
        "Design",
        "Devices",
        "Emojis",
        "Finance",
        "Food and Drink",
        "Health",
        "Holidays",
        "Home",
        "Maps and Locations",
        "Nature",
        "People",
        "Science",
        "Sports",
        "Technology",
        "Tools",
        "Transportation",
        "Weather"
      ],
      materialCategories: [
        "Alert",
        "AV",
        "Communication",
        "Content",
        "Device",
        "Editor",
        "File",
        "Hardware",
        "Image",
        "Maps",
        "Navigation",
        "Notification",
        "Places",
        "Social",
        "Toggle"
      ]
    };
  },
  watch: {
    type() {
      this.$emit("setType", this.type);
    },
    selectedCategory() {
      this.$emit("selectCategory", this.selectedCategory);
    }
  },
  computed: {
    isDarkMode() {
      return this.$colorMode.preference === "dark" ? true : false;
    },
    altIcons() {
      if (this.$route.path === "/outlined") {
        return {
          name: "Filled",
          path: "/"
        };
      } else {
        return {
          name: "Outlined",
          path: "/outlined"
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
    dropdownCategories() {
      return ["Select a Category", ...this.currentCategories];
    },
    currentCategories() {
      return this.type === 'fluent' ? this.fluentCategories : this.materialCategories;
    }
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
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectCategory(category) {
      if (category === "Select a Category") {
        this.selectedCategory = null;
      } else {
        this.selectedCategory = category;
      }
      this.toggleDropdown();
      this.$emit("selectCategory", this.selectedCategory);
    }
  }
};
</script>

<style scoped>
.dropdown-menu-container {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 20;
  max-width: 240px;
  max-height: 240px;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
}

.dropdown-menu li {
  padding: 0.5rem 0.75rem;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f7fafc;
}

.search-dropdown-menu {
  max-height: 240px;
  width: 100%;
}

.dropdown-menu-text {
  text-align: left;
}

.dropdown-menu-icon-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: right;
  justify-content: right;
}

.search-input {
  width: 200px; /* Adjust the width as desired */
}

.rotate-180 {
  transform: rotate(180deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
