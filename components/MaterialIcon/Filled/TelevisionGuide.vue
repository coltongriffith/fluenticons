<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-television-guide" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTelevisionGuide.svg',
  mixins: [icon]
};
</script>