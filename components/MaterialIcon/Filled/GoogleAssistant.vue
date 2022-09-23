<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-google-assistant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7,2A6,6 0 0,0 1,8A6,6 0 0,0 7,14A6,6 0 0,0 13,8A6,6 0 0,0 7,2M21.5,6A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 21.5,9A1.5,1.5 0 0,0 23,7.5A1.5,1.5 0 0,0 21.5,6M17,8A3,3 0 0,0 14,11A3,3 0 0,0 17,14A3,3 0 0,0 20,11A3,3 0 0,0 17,8M17,15A3.5,3.5 0 0,0 13.5,18.5A3.5,3.5 0 0,0 17,22A3.5,3.5 0 0,0 20.5,18.5A3.5,3.5 0 0,0 17,15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGoogleAssistant.svg',
  mixins: [icon]
};
</script>