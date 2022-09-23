<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-archive-search" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 6H2V2H20V6M11.03 12H8V10.5C8 10.22 8.22 10 8.5 10H13.04C14.84 8.87 17.07 8.7 19 9.5V7H3V20H11.82C9.7 17.8 9.44 14.5 11.03 12M23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5S14 11 16.5 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21M19 15.5C19 14.12 17.88 13 16.5 13S14 14.12 14 15.5 15.12 18 16.5 18 19 16.88 19 15.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledArchiveSearch.svg',
  mixins: [icon]
};
</script>