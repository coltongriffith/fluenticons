<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-projector-screen-off" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 14.89V16.59L17.21 20.79L15.79 22.21L13 19.41V22H11V19.41L8.21 22.21L6.79 20.79L11 16.59V14H5V6.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73L13 14.89M19 14V5H20C20.55 5 21 4.55 21 4V3C21 2.45 20.55 2 20 2H5.2L17.2 14H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledProjectorScreenOff',
  mixins: [icon]
};
</script>