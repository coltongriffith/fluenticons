<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-trackpad-lock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,1C1.89,1 1,1.89 1,3V17C1,18.11 1.89,19 3,19H14V17H12V13H16.68C17.5,12.35 18.47,12 19.5,12C20,12 20.5,12.09 21,12.26V3C21,1.89 20.11,1 19,1H3M3,3H19V11H3V3M3,13H10V17H3V13M19.5,14A2.5,2.5 0 0,0 17,16.5V17A1,1 0 0,0 16,18V22A1,1 0 0,0 17,23H22A1,1 0 0,0 23,22V18A1,1 0 0,0 22,17V16.5A2.5,2.5 0 0,0 19.5,14M19.5,15A1.5,1.5 0 0,1 21,16.5V17H18V16.5A1.5,1.5 0 0,1 19.5,15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTrackpadLock.svg',
  mixins: [icon]
};
</script>