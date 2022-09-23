<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-zodiac-capricorn" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15,13C14.3,13 13.61,13.19 13,13.55V6A3,3 0 0,0 10,3C9.25,3 8.55,3.29 8,3.78C7.45,3.28 6.74,3 6,3V5A1,1 0 0,1 7,6V16H9V6A1,1 0 0,1 10,5A1,1 0 0,1 11,6V17A2,2 0 0,1 9,19V21C10.15,21 11.25,20.5 12,19.62C13.45,21.29 15.97,21.47 17.64,20C19.31,18.58 19.5,16.05 18.04,14.38C17.28,13.5 16.17,13 15,13M15,19A2,2 0 0,1 13,17A2,2 0 0,1 15,15A2,2 0 0,1 17,17A2,2 0 0,1 15,19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledZodiacCapricorn.svg',
  mixins: [icon]
};
</script>