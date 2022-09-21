<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      <lazy-icon-card
        v-for="(icon, i) in filteredIcons.slice(0, elementsToShow)"
        :key="i"
        :icon="icon"
        @setIcon="setIcon(icon)"
        :selected="icon.name === selectedIcon.name ? true : false"
      />
    </div>
    <div class="my-8">
      <base-not-found
        v-if="!filteredIcons.length"
        :search-query="searchQuery"
      />
      <button
        class="show-more-btn"
        @click="showMore"
        v-if="filteredIcons.length > elementsToShow"
      >
        Show More Icons
      </button>

      <div class="flex-center flex-col">
        <small class="mt-8"
          ><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></small
        >
      </div>
    </div>
  </div>
</template>

<script>
import icons from "~/assets/icons/fluent/filled.json";
export default {
  props: {
    selectedIcon: {
      type: Object,
    },
    searchQuery: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      icons,
      elementsToShow: 48,
    };
  },
  computed: {
    filteredIcons() {
      return this.icons.filter((icon) => {
        return icon.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase().replace(" ", ""));
      });
    },
  },
  methods: {
    setIcon(payload) {
      this.$emit("setIcon", payload);
    },
    showMore() {
      this.elementsToShow += 48;
    },
  },
};
</script>
