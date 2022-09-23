<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cellphone-nfc" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,16V18A5,5 0 0,1 7,23H9A7,7 0 0,0 2,16M2,20V23H5A3,3 0 0,0 2,20M2,12V14A9,9 0 0,1 11,23H13C13,16.92 8.08,12 2,12M17,1H7A2,2 0 0,0 5,3V10.37C5.69,10.53 6.36,10.74 7,11V5H17V18H13.97C14.5,19.25 14.81,20.59 14.92,22H17A2,2 0 0,0 19,20V3A2,2 0 0,0 17,1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCellphoneNfc.svg',
  mixins: [icon]
};
</script>