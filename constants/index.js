export const hostURL = "https://fluenticons.co";
export const appTitleSmall = "Fluenticons";
export const appTitle = "Fluenticons";
export const description =
  "Beautiful and Open source icons from Microsoft, a collection of over 4000 filled and outlined icons.";

export const head = {
  title: appTitle,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: description },
    {
      'http-equiv': "Content-Security-Policy",
      content: "upgrade-insecure-requests",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  script: [
    {
      src: "https://cdn.splitbee.io/sb.js",
      async: true,
      defer: true,
      hid: "splitbee",
    },
  ],
};

export const pwa = {
  meta: {
    name: appTitleSmall,
    description,
    ogHost: hostURL,
    ogImage: "/social.png",
    twitterCard: "summary_large_image",
    twitterSite: "@fayazara",
    twitterCreator: "@fayazara",
  },
  manifest: {
    lang: "en",
    name: appTitle,
    short_name: appTitleSmall,
  },
};

export const axios = {
  baseURL: "http://178.128.135.186:3001",
};

export const css = ["~/assets/css/styles.css"];

export const plugins = ["~/plugins/tooltip", "~/plugins/gtag"];

export const googleFonts = {
  families: {
    Inter: [400, 500, 600, 700],
  },
  display: "swap",
  download: true,
};

export const colorMode = {
  classSuffix: "",
};

export const toast = {
  position: "top-right",
  duration: 7000,
};

export const buildModules = ["@nuxtjs/color-mode"];

export const modules = [
  "@nuxtjs/axios",
  "@nuxtjs/pwa",
  "@nuxt/content",
  "vue-swatches/nuxt",
  "nuxt-clipboard2",
  "@nuxtjs/toast",
  "@nuxtjs/google-fonts",
  "@nuxtjs/robots",
  "@nuxtjs/tailwindcss",
  "@nuxtjs/auth-next",
  [
    "@nuxtjs/google-adsense",
    {
      id: "ca-pub-9128081695641229",
    },
  ],
];

export const build = { babel: { compact: true } };
