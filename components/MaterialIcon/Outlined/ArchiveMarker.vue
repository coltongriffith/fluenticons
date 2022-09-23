<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-archive-marker-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.5 11C14.72 11 14.9 11.14 14.97 11.33C14.42 11.79 13.96 12.36 13.63 13H9V11.5C9 11.22 9.22 11 9.5 11H14.5M21 9H3V3H21V9M19 5H5V7H19V5M6 19V10H4V21H15.19C14.78 20.4 14.36 19.72 14 19H6M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedArchiveMarker',
  mixins: [icon]
};
</script>