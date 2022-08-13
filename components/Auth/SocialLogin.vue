<template>
  <div class="grid grid-cols-3 gap-3">
    <button @click="login('google')" class="font-semibold border text-center py-2 px-4 bg-transparent border-2 border-gray-200 hover:border-gray-300 rounded">
      <img src="/google-logo.svg" class="w-6 h-6 mx-auto" />
    </button>
    <button @click="login('facebook')" class="font-semibold border text-center py-2 px-4 bg-transparent border-2 border-gray-200 hover:border-gray-300 rounded">
      <img src="/facebook-logo.png" class="w-6 h-6 mx-auto" />
    </button>
    <button @click="login('github')" class="font-semibold border text-center py-2 px-4 bg-transparent border-2 border-gray-200 hover:border-gray-300 rounded">
      <img src="/github-logo.svg" class="w-6 h-6 mx-auto" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    login(provider) {
      this.$auth.loginWith(provider)
    }
  }
}
</script>
