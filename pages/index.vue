<template>
  <main>
    <home-hero />
    <home-search v-model="query" />
    <home-icons :query="query" />
    <transition name="scroll" mode="out-in">
      <scroll-up v-if="show" />
    </transition>
  </main>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      show: false,
    };
  },
  methods: {
    handleScroll() {
      var y = window.scrollY;
      if (y >= 400) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>