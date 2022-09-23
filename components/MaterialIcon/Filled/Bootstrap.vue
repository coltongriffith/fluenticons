<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bootstrap" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.79 11.5H9.72V8.19H12.19C13.45 8.19 14.15 8.75 14.15 9.78C14.15 10.9 13.32 11.5 11.79 11.5M12.16 12.63H9.72V16.27L12.28 16.27C13.84 16.27 14.66 15.64 14.66 14.44S13.81 12.63 12.16 12.63M22 5.31V18.69C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2H18.69C20.5 2 22 3.5 22 5.31M16 14.5C16 13.12 15.08 12.13 13.67 11.95V11.89C14.67 11.71 15.46 10.71 15.46 9.63C15.46 8.08 14.26 7.05 12.5 7.05H8.43V17.41H12.47C14.68 17.41 16 16.32 16 14.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBootstrap.svg',
  mixins: [icon]
};
</script>