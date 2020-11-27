import { defaultHead } from './constants/index';
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: defaultHead,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/styles/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //https://www.npmjs.com/package/nuxt-lazy-load
    "nuxt-lazy-load",
    //https://www.npmjs.com/package/@nuxtjs/toast
    "@nuxtjs/toast",
    //https://www.npmjs.com/package/nuxt-webfontloader
    "nuxt-webfontloader"
  ],

  webfontloader: {
    google: {
      families: ["Inter:400,600,700?display=swap"]
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  pwa: {
    meta: {
      theme_color: "#ffcd57"
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
