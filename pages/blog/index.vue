<template>
  <div class="m-8">
    <Header />

    <h1 class="font-bold text-4xl pt-8 mb-4">Blog Posts</h1>
    <ul class="flex flex-wrap min-h-[calc(100vh-194px)]">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <img
            v-if="article.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="api + article.img"
          />

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ article.title }}</h2>
            <p>by {{ article.author?.name || article.author.email }}</p>
            <p class="font-bold text-gray-600 text-sm">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <footer class="flex justify-center border-gray-500 border-t-2">
      <p class="mt-4">
        Created by
        <a
          href="https://twitter.com/coltongriffith"
          class="font-bold hover:underline"
          >Colton Griffith</a
        >
        at NuxtJS.
      </p>
    </footer>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: { Header },
  data() {
    return {
      articles: [],
      api: process.env.api
    }
  },
  async mounted() {
    this.articles = await this.$axios.$get('/api/blog')
  }
};
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
