<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hand-wash-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17 5L17.62 6.37L19 7L17.62 7.63L17 9L16.36 7.63L15 7L16.36 6.37L17 5M20 14C21.1 14 22 13.1 22 12S20 8 20 8 18 10.9 18 12 18.9 14 20 14M11 6.1V4H13C13.57 4 14.1 4.17 14.55 4.45L16 3C15.15 2.39 14.13 2 13 2H7.5V4H9V6.11C7.22 6.5 5.8 7.79 5.25 9.5H7.41C7.94 8.61 8.89 8 10 8C11.62 8 12.94 9.29 13 10.9L15 11.65V11C15 8.58 13.28 6.56 11 6.1M22 19V20L14 22.5L7 20.56V22H1V11H8.97L15.13 13.3C16.25 13.72 17 14.8 17 16H19C20.66 16 22 17.34 22 19M5 20V13H3V20H5M19.9 18.57C19.74 18.24 19.39 18 19 18H13.65C13.11 18 12.58 17.92 12.07 17.75L9.69 16.96L10.32 15.06L12.7 15.85C13 15.95 15 16 15 16C15 15.63 14.77 15.3 14.43 15.17L8.61 13H7V18.5L13.97 20.41L19.9 18.57Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedHandWash',
  mixins: [icon]
};
</script>