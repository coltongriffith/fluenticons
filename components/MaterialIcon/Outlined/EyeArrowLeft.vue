<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-eye-arrow-left-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C12.36 19.5 12.72 19.5 13.08 19.45C13.03 19.13 13 18.82 13 18.5C13 18.14 13.04 17.78 13.1 17.42C12.74 17.46 12.37 17.5 12 17.5C8.24 17.5 4.83 15.36 3.18 12C4.83 8.64 8.24 6.5 12 6.5S19.17 8.64 20.82 12C20.7 12.24 20.56 12.45 20.43 12.68C21.09 12.84 21.72 13.11 22.29 13.5C22.56 13 22.8 12.5 23 12C21.27 7.61 17 4.5 12 4.5M12 9C10.34 9 9 10.34 9 12S10.34 15 12 15 15 13.66 15 12 13.66 9 12 9M18 15V17H22V19H18V21L15 18L18 15" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedEyeArrowLeft',
  mixins: [icon]
};
</script>