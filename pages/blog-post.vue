<template>
  <div>
    <div class="m-8" v-if="isAuthorized">
      <Header />
      <h1 class="font-bold text-4xl pt-8 flex gap-2 items-center">
        <NuxtLink to="/blog"><img src="/left-arrow.png" class="cursor-pointer" /></NuxtLink>
        Blog Post
      </h1>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form class="max-w-7xl mx-auto" @submit.prevent="submitForm">
          <div class="md:grid grid-cols-2 gap-4">
            <div class="mb-4">
              <div class="flex mb-2">
                <label class="block text-gray-700 font-bold mr-3">Cover Image</label>
                <label
                  for="img"
                  v-if="view"
                  class="relative cursor-pointer rounded-md bg-white font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                ><span>Change</span></label>
              </div>
              <div
                class="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 min-h-[320px] items-center"
                v-if="!view"
              >
                <div class="space-y-1 text-center">
                  <div class="flex text-sm text-gray-600">
                    <label for="img" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="img" name="img" type="file" class="sr-only" @change="handleFile" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              <div class="relative" v-if="view"><img :src="view" /></div>
            </div>
            <div class="mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="title">Title</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter title" v-model="title" />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="description">Description</label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="3" placeholder="Enter description" v-model="description"></textarea>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="content">Content</label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" rows="12" placeholder="Enter content" v-model="content"></textarea>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const { token, user } = useAuth()
const { apiBase } = useRuntimeConfig().public

const isAuthorized = computed(() =>
  user.value?.email === 'milos@fluenticons.co' ||
  user.value?.email === 'colton@fluenticons.co'
)

const title = ref('')
const description = ref('')
const img = ref(null)
const content = ref('')
const view = ref(null)

async function submitForm() {
  const formData = new FormData()
  formData.append('title', title.value)
  formData.append('content', content.value)
  formData.append('description', description.value)
  if (img.value) formData.append('img', img.value)
  const response = await $fetch(`${apiBase}/api/blog`, {
    method: 'POST',
    body: formData,
    headers: { Authorization: `Bearer ${token.value}` },
  })
  if (response.success) navigateTo('/blog')
}

function handleFile(e) {
  if (!e.target.files?.[0]) return
  const file = e.target.files[0]
  img.value = file
  view.value = URL.createObjectURL(file)
  e.target.value = ''
}
</script>
