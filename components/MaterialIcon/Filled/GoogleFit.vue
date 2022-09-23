<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-google-fit" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17,4A5,5 0 0,1 22,9C22,10.38 21.44,11.63 20.54,12.54L12,21.07L3.46,12.54C2.56,11.63 2,10.38 2,9A5,5 0 0,1 7,4C8.38,4 9.63,4.56 10.54,5.46L12,6.93L13.46,5.46C14.37,4.56 15.62,4 17,4M15.59,7.59L9.17,14L12,16.83L18.41,10.41C18.78,10.05 19,9.55 19,9A2,2 0 0,0 17,7C16.45,7 15.95,7.22 15.59,7.59M8.41,7.59C8.05,7.22 7.55,7 7,7A2,2 0 0,0 5,9C5,9.55 5.22,10.05 5.59,10.41L7.05,11.88L9.88,9.05L8.41,7.59Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGoogleFit.svg',
  mixins: [icon]
};
</script>