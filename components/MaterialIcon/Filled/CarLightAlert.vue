<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-car-light-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23 7V13H21V7H23M21 17H23V15H21V17M1 9V11H5C5.1 10.3 5.1 9.6 5.2 9H1M5 13H1V15H5.2C5.1 14.4 5.1 13.7 5 13M5.9 6.4C6 5.8 6.3 5.4 6.5 5H1V7H5.7C5.8 6.8 5.8 6.6 5.9 6.4M1 17V19H6.6C6.2 18.4 5.9 17.8 5.7 17H1M10 4.8C6 4.8 6 19.2 10 19.2S19 16.5 19 12 14 4.8 10 4.8M10.1 17.2C9.7 16.8 9 15 9 12S9.7 7.2 10.1 6.8C13 6.9 17 8.7 17 12S13 17.1 10.1 17.2" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCarLightAlert.svg',
  mixins: [icon]
};
</script>