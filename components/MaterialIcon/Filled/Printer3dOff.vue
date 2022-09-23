<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-printer-3d-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.3 2L1 3.3L2.1 4.4C2 4.6 2 4.8 2 5V11H6V8.3L8.7 11L6.5 12.1C6.2 12.3 6 12.6 6 13V18.2C6 18.6 6.2 18.9 6.5 19.1L11.4 21.8C11.6 21.9 11.8 22 12 22S12.4 21.9 12.6 21.8L17.1 19.3L20.8 23L22.1 21.7L2.3 2M4.9 2H4.8L9.8 7H18V11H22V5C22 3.3 20.7 2 19 2H4.9C5 2 5 2 4.9 2M19 4C19.6 4 20 4.4 20 5S19.6 6 19 6 18 5.6 18 5 18.4 4 19 4M12.4 9.6L18 15.2V13C18 12.6 17.8 12.3 17.5 12.1L12.6 9.7C12.5 9.7 12.5 9.6 12.4 9.6M10.2 12.5L12.2 14.5L12 14.6L9 13L10.2 12.5M8 14.7L11 16.3V19.3L8 17.7V14.7M13.7 16L15.6 17.9L13 19.3V16.3L13.7 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPrinter3dOff.svg',
  mixins: [icon]
};
</script>