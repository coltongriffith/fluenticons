<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-castle" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCastle.svg',
  mixins: [icon]
};
</script>