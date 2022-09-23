<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-ocr" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 5V19H14V17H12C10.89 17 10 16.11 10 15V9C10 7.89 10.89 7 12 7H14V5M14 7V9H16V7M14 9H12V15H14M14 15V17H16V15M5 7H7C8.11 7 9 7.89 9 9V15C9 16.11 8.11 17 7 17H5C3.89 17 3 16.11 3 15V9C3 7.89 3.89 7 5 7M17 7V17H19V13H20V14H21V17H23V14H22V12H23V8H22V7M5 9V15H7V9M19 9H21V11H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledOcr.svg',
  mixins: [icon]
};
</script>