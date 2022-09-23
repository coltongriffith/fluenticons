<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-zodiac-scorpio" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.71,15.29L16.29,16.71L17.59,18H16A2,2 0 0,1 14,16V6A3,3 0 0,0 11,3C10.25,3 9.55,3.29 9,3.78C7.86,2.76 6.14,2.76 5,3.78C4.45,3.28 3.74,3 3,3V5A1,1 0 0,1 4,6V16H6V6A1,1 0 0,1 7,5A1,1 0 0,1 8,6V16H10V6A1,1 0 0,1 11,5A1,1 0 0,1 12,6V16A4,4 0 0,0 16,20H17.59L16.29,21.29L17.71,22.71L21.41,19L17.71,15.29Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledZodiacScorpio.svg',
  mixins: [icon]
};
</script>