<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-google-cardboard" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.74,6H3.2C2.55,6 2,6.57 2,7.27V17.73C2,18.43 2.55,19 3.23,19H8C8.54,19 9,18.68 9.16,18.21L10.55,14.74C10.79,14.16 11.35,13.75 12,13.75C12.65,13.75 13.21,14.16 13.45,14.74L14.84,18.21C15.03,18.68 15.46,19 15.95,19H20.74C21.45,19 22,18.43 22,17.73V7.27C22,6.57 21.45,6 20.74,6M7.22,14.58C6,14.58 5,13.55 5,12.29C5,11 6,10 7.22,10C8.44,10 9.43,11 9.43,12.29C9.43,13.55 8.44,14.58 7.22,14.58M16.78,14.58C15.56,14.58 14.57,13.55 14.57,12.29C14.57,11.03 15.56,10 16.78,10C18,10 19,11.03 19,12.29C19,13.55 18,14.58 16.78,14.58Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGoogleCardboard.svg',
  mixins: [icon]
};
</script>