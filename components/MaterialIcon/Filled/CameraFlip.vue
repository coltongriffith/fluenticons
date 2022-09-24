<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-camera-flip" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 5H17L15 3H9L7 5H4C2.9 5 2 5.9 2 7V19C2 20.11 2.9 21 4 21H20C21.11 21 22 20.11 22 19V7C22 5.9 21.11 5 20 5M5 12H7.1C7.65 9.29 10.29 7.55 13 8.1C13.76 8.25 14.43 8.59 15 9L13.56 10.45C13.11 10.17 12.58 10 12 10C10.74 10 9.6 10.8 9.18 12H11L8 15L5 12M16.91 14C16.36 16.71 13.72 18.45 11 17.9C10.25 17.74 9.58 17.41 9 17L10.44 15.55C10.9 15.83 11.43 16 12 16C13.27 16 14.41 15.2 14.83 14H13L16 11L19 14H16.91Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledCameraFlip',
  mixins: [icon]
};
</script>