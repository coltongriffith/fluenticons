<template>
  <div></div>
</template>

<script setup>
const route = useRoute()
const { setToken } = useAuth()
const { apiBase } = useRuntimeConfig().public

onMounted(async () => {
  const provider = route.params.provider
  let params

  if (provider === 'facebook') {
    const access_token = route.hash?.split('&')[0]?.split('=')[1]
    params = { token: access_token }
  } else {
    const { code } = route.query
    params = { code }
  }

  const response = await $fetch(`${apiBase}/api/social/${provider}`, {
    method: 'POST',
    body: params,
  })

  if (response.success) {
    await setToken(response.token)
  }

  navigateTo('/')
})
</script>
