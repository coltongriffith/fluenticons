<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-printer-pos-network" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17 7H7V2H17V7M22 20V22H15C15 22.55 14.55 23 14 23H10C9.45 23 9 22.55 9 22H2V20H9C9 19.45 9.45 19 10 19H11V17H4V10C4 8.9 4.89 8 6 8H18C19.11 8 20 8.9 20 10V17H13V19H14C14.55 19 15 19.45 15 20H22M18 10H14V12H18V10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPrinterPosNetwork.svg',
  mixins: [icon]
};
</script>