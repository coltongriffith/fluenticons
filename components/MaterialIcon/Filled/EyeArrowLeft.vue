<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-eye-arrow-left" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C12.36 19.5 12.72 19.5 13.08 19.45C13.03 19.13 13 18.82 13 18.5C13 17.94 13.08 17.38 13.24 16.84C12.83 16.94 12.42 17 12 17C9.24 17 7 14.76 7 12S9.24 7 12 7 17 9.24 17 12C17 12.29 16.97 12.59 16.92 12.88C17.58 12.63 18.29 12.5 19 12.5C20.17 12.5 21.31 12.84 22.29 13.5C22.56 13 22.8 12.5 23 12C21.27 7.61 17 4.5 12 4.5M12 9C10.34 9 9 10.34 9 12S10.34 15 12 15 15 13.66 15 12 13.66 9 12 9M18 15V17H22V19H18V21L15 18L18 15" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEyeArrowLeft.svg',
  mixins: [icon]
};
</script>