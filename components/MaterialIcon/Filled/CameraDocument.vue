<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-camera-document" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 7V22H3V20H19V7H14.72C14.38 7.6 13.74 8 13 8C13 9.11 12.1 10 11 10H8C6.9 10 6 9.1 6 8V4C6 2.9 6.9 2 8 2H11C12.1 2 13 2.9 13 4C13.74 4 14.38 4.41 14.72 5H19C20.11 5 21 5.89 21 7M6 15H13L11 11H8L6 15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCameraDocument.svg',
  mixins: [icon]
};
</script>