<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-qrcode-minus" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5 5H7V7H5V5M1 1H11V11H1V1M3 3V9H9V3H3M5 17H7V19H5V17M1 13H11V23H1V13M3 15V21H9V15H3M13 13H17V15H19V13H23V15H19V17H23V23H19V21H15V23H13V21H15V19H13V13M21 21V19H19V21H21M19 17H17V15H15V19H19V17M14 5V7H22V5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledQrcodeMinus.svg',
  mixins: [icon]
};
</script>