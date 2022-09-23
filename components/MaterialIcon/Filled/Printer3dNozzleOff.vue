<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-printer-3d-nozzle-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.8 22.7L14 15.9L13 17H11L7.5 13H5V8H6.1L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M11 19C11 19.6 10.6 20 10 20H2V22H10C11.7 22 13 20.7 13 19V18H11V19M19 13V8H17V2H7V3.8L16.2 13H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPrinter3dNozzleOff.svg',
  mixins: [icon]
};
</script>