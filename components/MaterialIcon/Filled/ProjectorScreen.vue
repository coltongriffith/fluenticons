<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-projector-screen" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4,2A1,1 0 0,0 3,3V4A1,1 0 0,0 4,5H5V14H11V16.59L6.79,20.79L8.21,22.21L11,19.41V22H13V19.41L15.79,22.21L17.21,20.79L13,16.59V14H19V5H20A1,1 0 0,0 21,4V3A1,1 0 0,0 20,2H4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledProjectorScreen',
  mixins: [icon]
};
</script>