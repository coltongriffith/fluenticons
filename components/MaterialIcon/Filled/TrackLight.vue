<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-track-light" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6,1V3H9V6.4L4.11,4.38L1.43,10.84L6.97,13.14L11.94,16.82L13.79,17.59L17.62,8.35L15.77,7.58L11,6.87V3H14V1H6M21.81,6.29L19.5,7.25L20.26,9.1L22.57,8.14L21.81,6.29M19.78,13.57L19,15.42L21.79,16.57L22.55,14.72L19.78,13.57M16.19,18.93L14.34,19.69L15.3,22L17.15,21.23L16.19,18.93Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTrackLight.svg',
  mixins: [icon]
};
</script>