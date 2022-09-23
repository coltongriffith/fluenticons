<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-scanner-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,5.27L3.28,4L20,20.72L18.73,22L16.73,20H5A2,2 0 0,1 3,18V12.5C3,11.7 3.5,10.9 4.2,10.7L6.57,9.84L2,5.27M6.4,12H8.73L8.11,11.38L6.4,12M5,15V17H13.73L11.73,15H5M19.8,5L20.5,6.9L11.85,10.03L10.3,8.47L19.8,5M19,12A2,2 0 0,1 21,14V18C21,18.34 20.91,18.66 20.76,18.94L19,17.18V15H16.82L13.82,12H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledScannerOff.svg',
  mixins: [icon]
};
</script>