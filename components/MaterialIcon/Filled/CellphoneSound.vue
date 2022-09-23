<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cellphone-sound" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.1,8.7C20.9,10.5 20.9,13.3 19.1,15.2L20.1,16.2C22.6,13.9 22.6,10.1 20.1,7.7L19.1,8.7M18,9.8L17,10.8C17.5,11.5 17.5,12.4 17,13.1L18,14.1C19.2,12.9 19.2,11.1 18,9.8M14,1H4A2,2 0 0,0 2,3V21A2,2 0 0,0 4,23H14A2,2 0 0,0 16,21V3A2,2 0 0,0 14,1M14,20H4V4H14V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCellphoneSound.svg',
  mixins: [icon]
};
</script>