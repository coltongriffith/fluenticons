module.exports = {
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: [
        "Inter",
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
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class"
    }),
    require("@tailwindcss/typography")
  ],
  content: [
    "./app/**/*.{js,vue,ts}",
    "./nuxt.config.{js,ts}",
  ],
};
