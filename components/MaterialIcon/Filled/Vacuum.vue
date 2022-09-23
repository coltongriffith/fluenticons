<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-vacuum" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23 20V22H16L16 20H18.46L12 4.61C11.81 4.14 11.5 3.76 11.06 3.46S10.14 3 9.61 3C8.9 3 8.28 3.27 7.76 3.79S7 4.92 7 5.64L7 9H8C10.21 9 12 10.79 12 13V22H8C8.61 21.16 9 20.13 9 19C9 16.24 6.76 14 4 14C3.29 14 2.61 14.15 2 14.42V9H5V5.64C5 4.8 5.23 4 5.63 3.32C6.04 2.62 6.59 2.06 7.3 1.63C8 1.21 8.77 1 9.61 1C10.55 1 11.4 1.26 12.16 1.77S13.5 2.97 13.87 3.81L20.66 20H23M7 19C7 20.66 5.66 22 4 22S1 20.66 1 19 2.34 16 4 16 7 17.34 7 19M5 19C5 18.45 4.55 18 4 18S3 18.45 3 19 3.45 20 4 20 5 19.55 5 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVacuum.svg',
  mixins: [icon]
};
</script>