<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-white-balance-auto" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10.3,16L9.6,14H6.4L5.7,16H3.8L7,7H9L12.2,16M22,7L20.8,13.29L19.3,7H17.7L16.21,13.29L15,7H14.24C12.77,5.17 10.5,4 8,4A8,8 0 0,0 0,12A8,8 0 0,0 8,20C11.13,20 13.84,18.19 15.15,15.57L15.25,16H17L18.5,9.9L20,16H21.75L23.8,7M6.85,12.65H9.15L8,9L6.85,12.65Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWhiteBalanceAuto.svg',
  mixins: [icon]
};
</script>