export default defineNuxtPlugin(async () => {
  const { token, fetchUser } = useAuth()
  if (token.value) {
    await fetchUser()
  }
})
