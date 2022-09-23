<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-printer-wireless" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4.93,3.92L6.34,5.33C9.46,2.2 14.53,2.2 17.66,5.33L19.07,3.92C15.17,0 8.84,0 4.93,3.92M7.76,6.75L9.17,8.16C10.73,6.6 13.26,6.6 14.83,8.16L16.24,6.75C13.9,4.41 10.1,4.41 7.76,6.75M19,14A1,1 0 0,1 18,13A1,1 0 0,1 19,12A1,1 0 0,1 20,13A1,1 0 0,1 19,14M16,20H8V15H16V20M19,10H5A3,3 0 0,0 2,13V18H6V22H18V18H22V13A3,3 0 0,0 19,10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPrinterWireless.svg',
  mixins: [icon]
};
</script>