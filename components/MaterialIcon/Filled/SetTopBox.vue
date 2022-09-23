<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-set-top-box" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5,15.5A0.5,0.5 0 0,1 4.5,16H3.5A0.5,0.5 0 0,1 3,15.5V15H2A1,1 0 0,1 1,14V11A1,1 0 0,1 2,10H22A1,1 0 0,1 23,11V14A1,1 0 0,1 22,15H21V15.5A0.5,0.5 0 0,1 20.5,16H19.5A0.5,0.5 0 0,1 19,15.5V15H5V15.5M3,12V13H5V12H3M6,12V13H8V12H6M20.5,11.5A1,1 0 0,0 19.5,12.5A1,1 0 0,0 20.5,13.5A1,1 0 0,0 21.5,12.5A1,1 0 0,0 20.5,11.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSetTopBox.svg',
  mixins: [icon]
};
</script>