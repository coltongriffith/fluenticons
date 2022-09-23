<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pentagram" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.15 14.4L18.71 22.26L12 17.4L5.28 22.3L7.85 14.37L1.15 9.5H9.44L12 1.61L14.56 9.5H22.89L16.15 14.4M13.3 16.47L15.86 18.33L14.88 15.32L13.3 16.47M11 9.5H13L12 6.47L11 9.5M10.74 16.47L9.13 15.3L8.13 18.37L10.74 16.47M18.28 11H15.05L15.67 12.9L18.28 11M10.53 11L9.62 13.8L12 15.54L14.39 13.82L13.47 11H10.53M5.76 11L8.34 12.87L8.95 11H5.76Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPentagram.svg',
  mixins: [icon]
};
</script>