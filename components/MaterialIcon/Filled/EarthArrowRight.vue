<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-earth-arrow-right" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 21V19H15V17H19V15L22 18L19 21M12 18C12 15.8 13.2 13.9 15 12.8C14.9 12.3 14.5 12 14 12H8V10H10C10.6 10 11 9.6 11 9V7H13C14.1 7 15 6.1 15 5V4.6C17.9 5.8 20 8.6 20 12V12.3C20.7 12.5 21.3 12.9 21.9 13.4C22 13 22 12.5 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12 6.5 22 12 22C12.5 22 13 22 13.4 21.9C12.5 20.8 12 19.5 12 18M11 19.9C7 19.4 4 16.1 4 12C4 11.4 4.1 10.8 4.2 10.2L9 15V16C9 17.1 9.9 18 11 18V19.9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEarthArrowRight.svg',
  mixins: [icon]
};
</script>