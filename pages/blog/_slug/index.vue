<template>
  <article class="flex xs:flex-col lg:flex-row">
    <!-- <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
      <img
        :src="api + article.img"
        :alt="article.title"
        class="absolute h-full w-full object-cover"
      />
      <div class="overlay"></div>
      <div class="absolute top-32 left-32 text-white">
        <NuxtLink to="/"><Logo /></NuxtLink>
        <div class="mt-16 -mb-3 flex uppercase text-sm">
          <p class="mr-3 mb-6">
            {{ formatDate(article.updatedAt) }}
          </p>
          <span class="mr-3">•</span>
          <p class="mt-2">{{ article.author?.name }}</p>
        </div>
        <h1 class="text-6xl font-bold">{{ article.title }}</h1>
      </div>
      <Header class="ml-8 text-white" />
    </div> -->
    <div
      class="relative xs:p-8 lg:p-16 w-full h-full markdown-body post-right custom-scroll max-w-7xl mx-auto p-6"
    >
      <h1 class="font-bold text-4xl text-center">{{ article.title }}</h1>
      <p class="pb-4 text-center">
        Post last updated: {{ formatDate(article.updatedAt) }}
      </p>
      <p class="text-center">{{ article.description }}</p>
      <div class="max-w-4xl mx-auto">
        <img
          :src="api + article.img"
          :alt="article.title"
          class="h-full w-full object-cover max-w-lg mx-auto mt-16 mb-10"
        />
        <div v-if="article.content">
          <p
            v-for="(content, i) in article.content.split('\n')"
            :key="{ i }"
            class="mb-3"
          >
            {{ content }}
          </p>
        </div>
      </div>

      <!-- content author component -->
      <!-- <author :author="article.author" /> -->
      <!-- prevNext component -->
      <!-- <PrevNext :prev="prev" :next="next" class="mt-8" /> -->
    </div>
  </article>
</template>
<script>
import Header from "~/components/Header";

export default {
  components: { Header },
  data() {
    return {
      article: {},
      api: process.env.api,
    };
  },
  async beforeMount() {
    this.article = await this.$axios.$get(
      "/api/blog/" + this.$route.params.slug
    );
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  /* background-image: url('~assets/svg/icon-hashtag.svg'); */
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
