<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-gatsby" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4C8.27,4 5.14,6.55 4.25,10L14,19.75C17.45,18.86 20,15.73 20,12H14.75V13.5H18.2C17.71,15.54 16.24,17.19 14.31,17.94L6.06,9.69C7,7.31 9.3,5.63 12,5.63C14.13,5.63 16,6.67 17.18,8.28L18.41,7.22C16.95,5.26 14.63,4 12,4M4,12A8,8 0 0,0 12,20C12.04,20 12.09,20 4,12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGatsby.svg',
  mixins: [icon]
};
</script>