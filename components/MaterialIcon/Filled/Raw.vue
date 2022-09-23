<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-raw" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6.5 9C7.3 9 8 9.7 8 10.5V11.5C8 12.1 7.6 12.6 7.1 12.9L8 15H6.5L5.6 13H4.5V15H3V9H6.5M6.5 11.5V10.5H4.5V11.5H6.5M10.25 9H12.75L14.25 15H12.75L12.38 13.5H10.63L10.25 15H8.75L10.25 9M11 12H12L11.75 11H11.25L11 12M20 9H21.5L20 15H18.5L17.74 11.96L17 15H15.5L14 9H15.5L16.24 12L17 9H18.5L19.24 12L20 9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRaw.svg',
  mixins: [icon]
};
</script>