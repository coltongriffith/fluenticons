<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-integrated-circuit-chip" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10 4H20C21.11 4 22 4.89 22 6V8H18.59L16 10.59V14.59L14 16.59V20H10V16.59L8 14.59V9.41L10 7.41V4M18 11.41V14H22V10H19.41L18 11.41M6.59 8L8 6.59V4H4C2.89 4 2 4.89 2 6V8H6.59M6 14V10H2V14H6M8 17.41L6.59 16H2V18C2 19.11 2.89 20 4 20H8V17.41M17.41 16L16 17.41V20H20C21.11 20 22 19.11 22 18V16H17.41Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledIntegratedCircuitChip.svg',
  mixins: [icon]
};
</script>