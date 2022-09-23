<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-waves-arrow-left" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 14C5.39 14 6.78 13.53 8 12.67C10.44 14.38 13.56 14.38 16 12.67C17.22 13.53 18.61 14 20 14H22V16H20C18.63 16 17.26 15.65 16 15C13.5 16.3 10.5 16.3 8 15C6.74 15.65 5.38 16 4 16H2V14H4M8 18.67C10.44 20.38 13.56 20.38 16 18.67C17.22 19.53 18.61 20 20 20H22V22H20C18.63 22 17.26 21.65 16 21C13.5 22.3 10.5 22.3 8 21C6.74 21.65 5.38 22 4 22H2V20H4C5.39 20 6.78 19.53 8 18.67M6 10V7H11V5H6V2L2 6" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWavesArrowLeft.svg',
  mixins: [icon]
};
</script>