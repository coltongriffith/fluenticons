<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-layers-search-outline" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12S11 14 11 16.5 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9M15.5 19C14.12 19 13 17.88 13 16.5S14.12 14 15.5 14 18 15.12 18 16.5 16.88 19 15.5 19M9.59 19.2L3 14.07L4.62 12.81L9 16.22C9 16.32 9 16.41 9 16.5C9 17.46 9.22 18.38 9.59 19.2M9.5 14.04L3 9L12 2L21 9L18.66 10.82C17.96 10.44 17.19 10.18 16.37 10.07L17.74 9L12 4.53L6.26 9L10.53 12.32C10.1 12.84 9.74 13.42 9.5 14.04Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedLayersSearch',
  mixins: [icon]
};
</script>