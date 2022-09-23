<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-scale-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.11 21.46L20.84 22.73L19.11 21H18V19.89L12.11 14H11V12.89L10.31 12.2A7.92 7.92 0 0 0 7.09 13.68L8.46 15.06L7.05 16.47L5.68 15.1A7.94 7.94 0 0 0 4.06 19H6V21H2V20A10 10 0 0 1 8.68 10.57L3.85 5.74L2 5V3.89L1.11 3L2.39 1.73M21.91 18.71A10 10 0 0 0 14 10.2V8.2L22 5V3H6.2M12 18A1.84 1.84 0 0 0 11.12 18.21L7.27 20L11.12 21.79A1.84 1.84 0 0 0 12 22A2 2 0 0 0 12 18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledScaleOff.svg',
  mixins: [icon]
};
</script>