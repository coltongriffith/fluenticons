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

<script setup>
const config = useRuntimeConfig().public

const oauthUrls = {
  google: () => {
    const params = new URLSearchParams({
      client_id: config.googleClientId,
      redirect_uri: `${config.publicUrl}/callback/google`,
      response_type: 'code',
      scope: 'email profile',
    })
    return `https://accounts.google.com/o/oauth2/v2/auth?${params}`
  },
  github: () => {
    const params = new URLSearchParams({
      client_id: config.githubClientId,
      redirect_uri: `${config.publicUrl}/callback/github`,
      scope: 'user:email',
    })
    return `https://github.com/login/oauth/authorize?${params}`
  },
  facebook: () => {
    const params = new URLSearchParams({
      client_id: config.facebookClientId,
      redirect_uri: `${config.publicUrl}/callback/facebook`,
      response_type: 'token',
    })
    return `https://www.facebook.com/v12.0/dialog/oauth?${params}`
  },
}

function login(provider) {
  window.location.href = oauthUrls[provider]()
}
</script>
