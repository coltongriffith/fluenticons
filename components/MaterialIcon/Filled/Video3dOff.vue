<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-video-3d-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.61 2L21.35 20.74L19.94 22.15L14.8 17H13V15.2L11 13.23V15.21C10.93 15.68 10.74 16.08 10.41 16.41C10.08 16.73 9.68 16.93 9.21 17H5V15H9V13H6V11H8.8L6.79 9H5V7.23L1.2 3.41L2.61 2M16 7H16.22C17 7.07 17.63 7.36 18.14 7.88C18.65 8.39 18.93 9 19 9.76V14.24C18.95 14.63 18.87 15 18.72 15.3L17 13.6V9.85C16.95 9.63 16.84 9.44 16.69 9.28C16.53 9.13 16.34 9.03 16.12 9H15V11.59L13 9.57V7H16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVideo3dOff.svg',
  mixins: [icon]
};
</script>