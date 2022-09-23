<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-printer-pos-star-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 12H18V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V12C20 10.9 19.11 10 18 10H17V4H7V10H6C4.89 10 4 10.9 4 12V19H13C13 18.3 13.13 17.63 13.35 17H6V12M9 6H15V10H9V6M7 15V13H11V15H7M20.8 19.77L21.45 22.58L19 21.09L16.5 22.58L17.18 19.77L15 17.89L17.87 17.64L19 15L20.11 17.64L23 17.89L20.8 19.77Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedPrinterPosStar',
  mixins: [icon]
};
</script>