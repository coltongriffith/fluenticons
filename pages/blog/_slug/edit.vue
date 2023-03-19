<template>
  <div class="m-8">
    <Header />

    <h1 class="font-bold text-4xl pt-8">Blog Post</h1>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form class="max-w-7xl mx-auto" @submit.prevent="submitForm">
        <div class="md:grid grid-cols-2 gap-4">
          <div class="mb-4">
            <div class="flex mb-2">
              <label class="block text-gray-700 font-bold mr-3">Cover Image</label>
              <label for="img" v-if="view" class="relative cursor-pointer rounded-md bg-white font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Change</span>
              </label>
            </div>
            <div class="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 min-h-[320px] items-center" v-if="!view">
              <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label for="img" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            <div class="relative" v-if="view">
              <img :src="view" />
            </div>
            <input id="img" name="img" type="file" class="sr-only" @change="handleFile">
          </div>
          <div class="mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="title">
                Title
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter title"
                :value="title"
                @input="event => title = event.target.value"
              >
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="description">
                Description
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                rows="3"
                placeholder="Enter description"
                :value="description"
                @input="event => description = event.target.value"
              ></textarea>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="content">
                Content
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="content"
                rows="12"
                placeholder="Enter content"
                :value="content"
                @input="event => content = event.target.value"
              ></textarea>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-center gap-3">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="handleRemove"
            v-if="id"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: { Header },
  data() {
    return {
      id: '',
      title: '',
      description: '',
      img: '',
      content: '',
      view: null
    }
  },
  async mounted() {
    const article = await this.$axios.$get('/api/blog/' + this.$route.params.slug)
    this.id = article._id
    this.title = article.title
    this.description = article.description
    this.view = process.env.api + article.img
    this.content = article.content
  },
  methods: {
    async submitForm () {
      const formData = new FormData()
      formData.append('id', this.id)
      formData.append('title', this.title)
      formData.append('content', this.content)
      formData.append('description', this.description)
      if (this.img) formData.append('img', this.img)
      const response = await this.$axios.$post(`/api/blog`, formData)
      if (response.success) {
        window.location.href = "/blog"
      }
    },
    async handleRemove() {
      const response = await this.$axios.$delete(`/api/blog/` + this.$route.params.slug)
      if (response.success) {
        window.location.href = "/blog"
      }
    },
    handleFile(e) {
      if (!e.target.files?.[0]) return
      let file = e.target.files[0]
      this.img = file
      this.view = URL.createObjectURL(file)
      e.target.value = ""
    }
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
