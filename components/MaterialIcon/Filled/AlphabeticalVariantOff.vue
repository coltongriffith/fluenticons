<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-alphabetical-variant-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12.2 9L10.2 7H13A2 2 0 0 1 15 9V10.5A1.47 1.47 0 0 1 14.64 11.44L13 9.8V9M23 10V9A2 2 0 0 0 21 7H19A2 2 0 0 0 17 9V13.8L20.2 17H21A2 2 0 0 0 23 15V14H21V15H19V9H21V10M15 14.35L22.11 21.46L20.84 22.73L14.46 16.35A2 2 0 0 1 13 17H9V10.89L7 8.89V17H5V13H3V17H1V9A2 2 0 0 1 3 7H5.12L1.12 3L2.39 1.73L9 8.34L11 10.34L11.66 11L15 14.34M5 9H3V11H5M13 14.89L11.11 13H11V15H13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAlphabeticalVariantOff.svg',
  mixins: [icon]
};
</script>