<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-eyedropper-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 7.24L19.08 9.16L14.84 4.92L16.76 3C17.93 1.83 19.83 1.83 21 3S22.17 6.07 21 7.24M10.94 8.82L12.36 10.24L13 9.6L14.4 11L13.76 11.64L15.18 13.06L15.81 12.43L17.22 13.85L19.35 11.72L12.28 4.65L10.15 6.78L11.57 8.19L10.94 8.82M19.86 20.29L18.58 21.57L12.63 15.61L8.1 20.14L3.5 22L2 20.5L3.86 15.9L8.39 11.37L1.86 4.85L3.14 3.57L19.86 20.29M11.21 14.2L9.81 12.79L5.56 17.03L4.5 19.5L6.97 18.44L11.21 14.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEyedropperOff.svg',
  mixins: [icon]
};
</script>