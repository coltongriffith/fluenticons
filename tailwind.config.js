module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00c58e",
        "google-blue": "#3069E2",
        "facebook-blue": "#3B5998"
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "100": "28rem",
        "128": "32rem",
        "132": "40rem"
      }
    },
    fontFamily: {
      sans: [
        "Avenir",
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Ubuntu",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      "hooper/dist/hooper.css",
      "vue-cool-lightbox/dist/vue-cool-lightbox.min.css"
    ]
  }
};
