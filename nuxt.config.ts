export default defineNuxtConfig({
  app: {
    head: {
      title: 'Fluenticons',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Beautiful and Open source icons from Microsoft, a collection of over 4000 filled and outlined icons.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        { src: 'https://cdn.splitbee.io/sb.js', async: true, defer: true },
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9128081695641229',
          async: true,
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: 'https://api.fluenticons.co',
      publicUrl: process.env.PUBLIC_URL || 'http://localhost:3000',
      googleClientId: process.env.GOOGLE_CLIENT_ID || '',
      facebookClientId: process.env.FACEBOOK_CLIENT_ID || '',
      githubClientId: process.env.GITHUB_CLIENT_ID || '',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
  ],

  colorMode: {
    classSuffix: '',
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: 'swap',
    download: false,
  },

  dir: {
    public: 'static',
  },

  pwa: {
    manifest: {
      name: 'Fluenticons',
      short_name: 'Fluenticons',
      lang: 'en',
      description:
        'Beautiful and Open source icons from Microsoft.',
    },
    meta: {
      name: 'Fluenticons',
      description: 'Beautiful and Open source icons from Microsoft.',
      ogImage: '/social.png',
      twitterCard: 'summary_large_image',
      twitterSite: '@fayazara',
      twitterCreator: '@fayazara',
    },
  },

  css: ['~/assets/css/styles.css'],

  components: true,

  build: {
    transpile: ['vue-toastification'],
  },
})
