<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pyramid-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10.5 7.3L9.05 5.85L11.15 2.47C11.35 2.16 11.67 2 12 2C12.33 2 12.65 2.16 12.85 2.47L21.85 16.96H21.85C22.13 17.4 22 18 21.5 18.32L18.41 15.21L13 6.5V9.8L11 7.8V6.5L10.5 7.3M22.11 21.46L20.84 22.73L17.89 19.78L12.36 21.93C12.25 22 12.12 22 12 22S11.75 22 11.64 21.93L2.64 18.43C2 18.18 1.84 17.45 2.15 16.96H2.15L7.1 9L1.11 3L2.39 1.73L22.11 21.46M5.42 15.5L11 13.32V12.89L8.55 10.44L5.42 15.5M16.35 18.24L13.94 15.83L12 15.07L5.76 17.5L12 19.93L16.35 18.24Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPyramidOff.svg',
  mixins: [icon]
};
</script>