<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-shoe-print" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10.74,11.72C11.21,12.95 11.16,14.23 9.75,14.74C6.85,15.81 6.2,13 6.16,12.86L10.74,11.72M5.71,10.91L10.03,9.84C9.84,8.79 10.13,7.74 10.13,6.5C10.13,4.82 8.8,1.53 6.68,2.06C4.26,2.66 3.91,5.35 4,6.65C4.12,7.95 5.64,10.73 5.71,10.91M17.85,19.85C17.82,20 17.16,22.8 14.26,21.74C12.86,21.22 12.8,19.94 13.27,18.71L17.85,19.85M20,13.65C20.1,12.35 19.76,9.65 17.33,9.05C15.22,8.5 13.89,11.81 13.89,13.5C13.89,14.73 14.17,15.78 14,16.83L18.3,17.9C18.38,17.72 19.89,14.94 20,13.65Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledShoePrint.svg',
  mixins: [icon]
};
</script>