<template>
  <main class="flex">
    <section class="flex-grow">
      <base-hero />
      <base-navbar v-model="searchQuery" />
      <nuxt-child
        @setIcon="setIcon"
        :searchQuery="searchQuery"
        :selectedIcon="selectedIcon"
      />
    </section>
    <IconEditor :icon="selectedIcon" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      elementsToShow: 48,
      selectedIcon: {
        name: "Select and preview icons here",
        componentName: "FluentIconOutlinedSticker",
        svgFileName: "ic_fluent_sticker_24_regular.svg",
      },
    };
  },
  methods: {
    setIcon(payload) {
      this.selectedIcon = payload;
    },
  },
};
</script>
