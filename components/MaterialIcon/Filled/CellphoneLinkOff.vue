<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cellphone-link-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23,8H17A1,1 0 0,0 16,9V13.18L18,15.18V10H22V17H19.82L22.82,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6.27L14.73,17H4V6.27M1.92,1.65L0.65,2.92L2.47,4.74C2.18,5.08 2,5.5 2,6V17H0V20H17.73L20.08,22.35L21.35,21.08L3.89,3.62L1.92,1.65M22,6V4H6.82L8.82,6H22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCellphoneLinkOff.svg',
  mixins: [icon]
};
</script>