<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-4 lg:grid-cols-6 gap-6" v-if="icons.length">
      <lazy-icon-card
        v-for="(icon, i) in icons"
        :key="i"
        :icon="icon"
        @setIcon="setIcon(icon)"
        :selected="icon.name === selectedIcon.name ? true : false"
      />
    </div>
    <base-favorites-empty v-else />
  </div>
</template>

<script>
export default {
  props: {
    selectedIcon: {
      type: Object,
    },
  },
  computed: {
    icons() {
      return this.$store.getters.favorites;
    },
  },
  methods: {
    setIcon(payload) {
      this.$emit("setIcon", payload);
    },
  },
};
</script>
