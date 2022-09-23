<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-diabetes" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.73 2.29A1 1 0 0 1 16.14 3.7L13 6.79L13.76 7.74L15.7 12.74A1.46 1.46 0 0 1 15.36 14.29L12.27 17.38A1.55 1.55 0 0 1 10.15 17.38L5.55 12.78A1.37 1.37 0 0 1 5.15 11.78L4.65 5.34H5.72A1 1 0 0 1 6.47 5.64L6.61 5.81L7.66 9.29M7.66 22L2 16.36L4.12 14.24L9.78 19.9M19.5 4.5S17 7.26 17 9A2.5 2.5 0 1 0 22 9C22 7.26 19.5 4.5 19.5 4.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDiabetes.svg',
  mixins: [icon]
};
</script>