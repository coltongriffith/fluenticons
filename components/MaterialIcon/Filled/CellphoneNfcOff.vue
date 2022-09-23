<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cellphone-nfc-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.84 22.73L18.85 20.74C18.56 21.5 17.84 22 17 22H14.92C14.81 20.59 14.5 19.25 13.97 18H16.11L7 8.89V11C6.36 10.74 5.69 10.53 5 10.37V6.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M17 5V13.8L19 15.8V3C19 1.9 18.11 1 17 1H7C6.24 1 5.59 1.43 5.25 2.05L8.2 5H17M2 20V23H5C5 21.34 3.66 20 2 20M2 16V18C4.76 18 7 20.24 7 23H9C9 19.13 5.87 16 2 16M2 12V14C6.97 14 11 18.03 11 23H13C13 16.92 8.08 12 2 12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCellphoneNfcOff.svg',
  mixins: [icon]
};
</script>