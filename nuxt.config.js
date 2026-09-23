import { defineNuxtConfig } from "nuxt/config";

const hostURL = "https://fluenticons.co";
const title = "Fluenticons";
const description =
  "Beautiful and Open source icons from Microsoft, a collection of over 4000 filled and outlined icons.";
const adsenseClient = "ca-pub-9128081695641229";
const gaId = "G-VGSV4M0LY9";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  css: ["~/assets/css/styles.css"],
  colorMode: {
    classSuffix: "",
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: description },
        { "http-equiv": "Content-Security-Policy", content: "upgrade-insecure-requests" },
        { name: "theme-color", content: "#ffffff" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:site_name", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: hostURL },
        { property: "og:image", content: `${hostURL}/social.png` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/icon.png" },
        { rel: "manifest", href: "/manifest.webmanifest" },
      ],
      script: [
        {
          src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`,
          async: true,
          crossorigin: "anonymous",
        },
        { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`,
        },
      ],
    },
  },
  experimental: {
    appManifest: false,
  },
  nitro: {
    // Plain static output; public/_headers and public/_redirects are the
    // only Cloudflare Pages rules (no auto-generated catch-all fallback).
    preset: "static",
    output: { publicDir: "dist" },
    prerender: {
      routes: ["/", "/outlined", "/favorites", "/privacy-policy"],
      crawlLinks: true,
    },
  },
});
