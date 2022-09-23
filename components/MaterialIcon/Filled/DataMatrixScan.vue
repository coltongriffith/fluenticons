<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-data-matrix-scan" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 2H6V0H2C.9 0 0 .9 0 2V6H2V2M22 0H18V2H22V6H24V2C24 .9 23.1 0 22 0M2 18H0V22C0 23.1 .9 24 2 24H6V22H2V18M22 22H18V24H22C23.1 24 24 23.1 24 22V18H22V22M8 6V4H10V6H8M10 14V12H12V14H10M16 4H18V6H16V4M18 6H20V8H18V6M18 14H20V16H18V14M20 12H16V18H20V20H4V4H6V6H8V10H6V12H8V14H10V16H12V18H14V16H12V14H14V10H10V6H12V4H14V8H16V10H20V12M8 18V16H6V18H8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDataMatrixScan.svg',
  mixins: [icon]
};
</script>