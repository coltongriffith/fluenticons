<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-map-check-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.25,22L15.5,19L16.66,17.82L18.25,19.41L21.84,15.82L23,17.23L18.25,22M20.5,3A0.5,0.5 0 0,1 21,3.5V13.34C20.37,13.12 19.7,13 19,13V5.7L16,6.86V13.8C15.2,14.27 14.5,14.91 14,15.68V6.87L10,5.47V17.13L13.05,18.2L13,19C13,19.46 13.05,19.92 13.15,20.35L9,18.9L3.66,20.97L3.5,21A0.5,0.5 0 0,1 3,20.5V5.38C3,5.15 3.15,4.97 3.36,4.9L9,3L15,5.1L20.34,3.03L20.5,3M5,6.46V18.31L8,17.15V5.45L5,6.46Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedMapCheck',
  mixins: [icon]
};
</script>