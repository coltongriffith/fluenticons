const title = "Fluent Icons - Free & Open Source Icons from Microsoft";
const description =
  "MIT open source SVG icons from Microsoft, over 2100 beautiful icoons. Solid and 2px stroke based sets.";
const host = "https://fluenticons.co";
export default {
  target: "static",
  head: {
    title,
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: description
      },
      {
        name: "keywords",
        content:
          "icons, svg icons, free icons, fluent icons, microsoft fluent icons, open source icons"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["~/assets/styles/main.css"],
  plugins: ["~/plugins/gtag"],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "nuxt-lazy-load",
    "@nuxtjs/toast",
    "@nuxtjs/color-mode",
    "nuxt-clipboard2"
  ],
  colorMode: {
    classSuffix: ""
  },
  toast: {
    position: "bottom-left",
    duration: 5000
  },
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
      name: title,
      short_name: "Fluent Icons",
      theme_color: "#2f855a",
      description: description,
      ogHost: host,
      ogImage: "/social/icon.png",
      twitterCard: "summary_large_image",
      twitterSite: "@fayazara",
      twitterCreator: "@fayazara",
      author: "Fayaz Ahmed"
    }
  },
  build: {}
};
