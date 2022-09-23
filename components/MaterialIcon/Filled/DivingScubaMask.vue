<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-diving-scuba-mask" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,15C13.31,15 14.42,15.83 14.83,17H18A4,4 0 0,1 22,21V22H20V21A2,2 0 0,0 18,19H14.83C14.42,20.17 13.31,21 12,21A3,3 0 0,1 9,18A3,3 0 0,1 12,15M12,17A1,1 0 0,0 11,18A1,1 0 0,0 12,19A1,1 0 0,0 13,18A1,1 0 0,0 12,17M18,3A2,2 0 0,1 20,5V10A2,2 0 0,1 18,12H14.85C14.43,12 14.05,12.24 13.9,12.63C13.7,13.23 13.23,13.71 12.62,13.91C11.58,14.25 10.44,13.68 10.1,12.63C9.95,12.24 9.57,12 9.15,12H6A2,2 0 0,1 4,10V5A2,2 0 0,1 6,3H18M18,10V5H6V10H10.65C10.9,9.46 11.41,9.09 12,9C12.59,9.09 13.1,9.46 13.35,10H18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDivingScubaMask.svg',
  mixins: [icon]
};
</script>