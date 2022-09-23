<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-stadium" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7 5L3 7V3L7 5M18 3V7L22 5L18 3M11 2V6L15 4L11 2M5 10C6.4 10.5 8.8 11 12 11S17.6 10.5 19 10C19 9.8 16.2 9 12 9S5 9.9 5 10M15 17H9V21.9C4.9 21.5 2 20.4 2 19V10C2 8.3 6.5 7 12 7S22 8.3 22 10V19C22 20.3 19.1 21.5 15 21.9V17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledStadium.svg',
  mixins: [icon]
};
</script>