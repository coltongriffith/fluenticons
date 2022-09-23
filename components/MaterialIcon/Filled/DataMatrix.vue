<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-data-matrix" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 2V22H22V20H20V18H22V16H20V14H22V12H18V10H16V12H14V10H12V8H8V12H12V16H10V18H12V20H10V18H8V16H6V14H4V12H6V6H4V2H2M6 6H8V2H6V6M8 16H10V14H8V16M18 10H22V8H18V10M18 8V4H16V6H14V8H18M16 4V2H14V4H16M18 4H20V2H18V4M20 4V6H22V4H20M10 2V6H12V2H10M14 14H16V16H18V20H14V14M4 18H6V20H4V18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDataMatrix.svg',
  mixins: [icon]
};
</script>