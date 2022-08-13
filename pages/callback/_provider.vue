<template>
  <div></div>
</template>

<script>
export default {
  async mounted() {
    console.log(this.$route.hash )
    const { provider } = this.$route.params
    let params;
    switch (provider) {
      case ('facebook'):
        const access_token = this.$route.hash?.split('&')[0]?.split('=')[1]
        params = { token: access_token }
        break;
      default:
        const { code } = this.$route.query 
        params = { code }
    }
    console.log(params)
    const response = await this.$axios.$post(`/api/social/${provider}`, params)
    if (response.success) {
      console.log(response.token)
      await this.$auth.setUserToken(response.token)
    }
    window.location.href="/"
  }
}
</script>
