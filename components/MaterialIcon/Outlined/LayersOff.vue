<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-layers-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,4.53L10.83,5.44L9.41,4L12,2L21,9L17.28,11.89L15.85,10.47L17.74,9L12,4.53M21,14.07L20.13,14.75L18.7,13.32L19.37,12.8L21,14.07M3.41,0.86L22.14,19.59L20.73,21L16.95,17.22L12,21.07L3,14.07L4.62,12.81L12,18.54L15.5,15.79L14.1,14.37L12,16L3,9L6.22,6.5L2,2.27L3.41,0.86M12,13.47L12.67,12.94L7.65,7.92L6.26,9L12,13.47Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedLayersOff',
  mixins: [icon]
};
</script>