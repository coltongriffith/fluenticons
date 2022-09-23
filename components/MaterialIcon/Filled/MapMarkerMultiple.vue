<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-map-marker-multiple" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,11.5A2.5,2.5 0 0,0 16.5,9A2.5,2.5 0 0,0 14,6.5A2.5,2.5 0 0,0 11.5,9A2.5,2.5 0 0,0 14,11.5M14,2C17.86,2 21,5.13 21,9C21,14.25 14,22 14,22C14,22 7,14.25 7,9A7,7 0 0,1 14,2M5,9C5,13.5 10.08,19.66 11,20.81L10,22C10,22 3,14.25 3,9C3,5.83 5.11,3.15 8,2.29C6.16,3.94 5,6.33 5,9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMapMarkerMultiple.svg',
  mixins: [icon]
};
</script>