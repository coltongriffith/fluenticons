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
import fluentIcons from "~/assets/icons/fluent/filled.json";
export default {
  props: {
    selectedIcon: {
      type: Object,
    },
    type: {
      type: String,
      default: "fluent",
    },
    searchQuery: {
      type: String,
      default: "",
    },
    selectedCategory: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      fluentIcons,
      elementsToShow: 48,
    };
  },
  computed: {
    filteredIcons() {
      return this.fluentIcons.filter((icon) => {
        return (
          icon.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase().replace(" ", "")) &&
          (this.selectedCategory
            ? icon.category === this.selectedCategory
            : true)
        );
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
