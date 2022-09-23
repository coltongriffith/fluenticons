<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-spoon-sugar" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 13H3V10H6V13M10 10H7V13H10V10M8 6H5V9H8V6M18 12C14.25 12 12.28 13.25 11 14H2C2 16.21 3.79 18 6 18H7C8 18 8.92 17.63 9.62 17C11.06 15.78 12.68 14.74 14.55 14.36C15.61 14.15 16.78 14 18 14H22V12H18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSpoonSugar.svg',
  mixins: [icon]
};
</script>