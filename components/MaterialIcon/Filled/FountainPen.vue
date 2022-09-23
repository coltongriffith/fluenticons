<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fountain-pen" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6.95,14.93L11.19,9.27L19.68,2.2C20.07,1.81 20.72,1.81 21.09,2.2L21.8,2.91C22.19,3.28 22.19,3.93 21.8,4.32L14.73,12.81L9.07,17.05L6.95,14.93M8.36,17.76L6.24,15.64L3.41,17.05L2,21.29L4.12,19.17C4.32,19 4.63,19 4.83,19.17C5,19.37 5,19.68 4.83,19.88L2.71,22L6.95,20.59L8.36,17.76Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFountainPen.svg',
  mixins: [icon]
};
</script>