<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-vector-polyline-remove" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5M16 5V9.6L10.6 15H9.1L7.1 9H8V3H2V9H5L7 15H6V21H12V16.4L17.4 11H22V5H16M6 7H4V5H6V7M10 19H8V17H10V19M20 9H18V7H20V9" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVectorPolylineRemove.svg',
  mixins: [icon]
};
</script>