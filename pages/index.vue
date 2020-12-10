<template>
  <main>
    <home-hero />
    <home-search v-model="query" />
    <home-icons :query="query"/>
  </main>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
};
</script>