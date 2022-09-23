<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-store-search-outline" viewBox="0 0 24 24">
    <linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="`rotate(${angle})`"
    >
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient
      v-if="fill === 'url(#g2)'"
      id="g2"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop :stop-color="start" offset="0%" />
      <stop :stop-color="end" offset="100%" />
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 4H2V2H18V4M13.04 10H3.04L3.64 7H16.36L16.76 9C17.5 9.04 18.21 9.19 18.89 9.46L18 5H2L1 10V12H2V18H10.5C10.17 17.2 10 16.35 10 15.5V16H4V12H10V15.5C10 13.84 10.64 12.17 11.9 10.9C12.26 10.55 12.64 10.25 13.04 10M23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5S14 11 16.5 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21M19 15.5C19 14.12 17.88 13 16.5 13S14 14.12 14 15.5 15.12 18 16.5 18 19 16.88 19 15.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedStoreSearch',
  mixins: [icon]
};
</script>