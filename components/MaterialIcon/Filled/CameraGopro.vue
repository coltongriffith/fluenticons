<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-camera-gopro" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,5H15A2,2 0 0,0 13,7V12A2,2 0 0,0 15,14H20A2,2 0 0,0 22,12V7A2,2 0 0,0 20,5M17.5,12.5A3,3 0 0,1 14.5,9.5A3,3 0 0,1 17.5,6.5A3,3 0 0,1 20.5,9.5A3,3 0 0,1 17.5,12.5M17.5,11A1.5,1.5 0 0,1 16,9.5A1.5,1.5 0 0,1 17.5,8A1.5,1.5 0 0,1 19,9.5A1.5,1.5 0 0,1 17.5,11M12,15V5H4A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V15H12M10,12H4V7H10V12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCameraGopro.svg',
  mixins: [icon]
};
</script>