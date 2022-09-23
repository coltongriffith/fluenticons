<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-razor-single-edge" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 5V8H2V5H22M22 13V18H2V13H3.5C4.33 13 5 12.33 5 11.5S4.33 10 3.5 10L2 10V9H22V10H20.5C19.67 10 19 10.67 19 11.5S19.67 13 20.5 13H22M13 11C13 10.45 12.55 10 12 10S11 10.45 11 11V13C11 13.55 11.45 14 12 14S13 13.55 13 13V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRazorSingleEdge.svg',
  mixins: [icon]
};
</script>