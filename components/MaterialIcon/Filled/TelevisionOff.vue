<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-television-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M0.5,2.77L1.78,1.5L21,20.72L19.73,22L16.73,19H16V21H8V19H3A2,2 0 0,1 1,17V5C1,4.5 1.17,4.07 1.46,3.73L0.5,2.77M21,17V5H7.82L5.82,3H21A2,2 0 0,1 23,5V17C23,17.85 22.45,18.59 21.7,18.87L19.82,17H21M3,17H14.73L3,5.27V17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTelevisionOff.svg',
  mixins: [icon]
};
</script>