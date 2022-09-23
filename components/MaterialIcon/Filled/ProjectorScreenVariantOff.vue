<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-projector-screen-variant-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.84 22.73L16.11 18H5V9H4C3.45 9 3 8.55 3 8V7C3 6.45 3.45 6 4 6H4.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6H9.2L19 15.8V9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledProjectorScreenVariantOff.svg',
  mixins: [icon]
};
</script>