<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-arrow-horizontal-lock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.8 7V5.5C14.8 4.1 13.4 3 12 3S9.2 4.1 9.2 5.5V7C8.6 7 8 7.6 8 8.2V11.7C8 12.4 8.6 13 9.2 13H14.7C15.4 13 16 12.4 16 11.8V8.3C16 7.6 15.4 7 14.8 7M13.5 7H10.5V5.5C10.5 4.7 11.2 4.2 12 4.2S13.5 4.7 13.5 5.5V7M6 17V20L2 16L6 12V15H18V12L22 16L18 20V17H6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledArrowHorizontalLock.svg',
  mixins: [icon]
};
</script>