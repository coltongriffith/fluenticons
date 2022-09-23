<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-data-matrix-edit" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 12.1C19.9 12.1 19.7 12.2 19.6 12.3L18.6 13.3L20.7 15.4L21.7 14.4C21.9 14.2 21.9 13.8 21.7 13.6L20.4 12.3C20.3 12.2 20.2 12.1 20 12.1M18.1 13.9L12 19.9V22H14.1L20.2 15.9L18.1 13.9M8 6H6V2H8V6M10 16H8V14H10V16M12 6H10V2H12V6M16 2V4H14V2H16M20 4H18V2H20V4M10 20V18H8V16H6V14H4V12H6V6H4V2H2V22H10V20M6 20H4V18H6V20M22 10H18V8H22V10M20 6V4H22V6H20M18 4V8H14V6H16V4H18M10 18V16H12V12H8V8H12V10H14V12H16V10H18V11.1L15.1 14H14V15.1L11.1 18H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDataMatrixEdit.svg',
  mixins: [icon]
};
</script>