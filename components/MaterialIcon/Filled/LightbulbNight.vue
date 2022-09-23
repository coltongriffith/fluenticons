<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-lightbulb-night" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 21C6 21.55 6.45 22 7 22H11C11.55 22 12 21.55 12 21V20H6V21M13 16.32V17C13 17.55 12.55 18 12 18H6C5.45 18 5 17.55 5 17V14.74C3.19 13.47 2 11.38 2 9C2 5.13 5.13 2 9 2C10.65 2 12.16 2.57 13.35 3.5C10.8 4.57 9 7.07 9 10C9 12.79 10.64 15.19 13 16.32M20.92 9.94L19.5 9.03L18.1 10L18.5 8.35L17.17 7.32L18.85 7.21L19.41 5.6L20.04 7.18L21.72 7.22L20.42 8.3L20.92 9.94M19.39 13C17.5 15.27 14.03 15.19 12.22 12.95C10 10.13 11.56 6 15 5.34C15.34 5.29 15.64 5.63 15.5 5.97C15.05 7.25 15.12 8.71 15.85 9.97C16.58 11.24 17.79 12.03 19.12 12.25C19.47 12.3 19.62 12.74 19.39 13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLightbulbNight.svg',
  mixins: [icon]
};
</script>