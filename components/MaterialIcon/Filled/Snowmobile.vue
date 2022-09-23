<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-snowmobile" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.34 17.93L18.4 16C19.5 15.91 22.66 15.53 22.97 13.36C23 13.12 22.92 12.89 22.78 12.7C22.12 11.82 19.88 9.07 15 5H12V7H14L16 9L12 11L3 10L1 13L5.58 14.38L2.58 16.09C2.22 16.26 1 16.89 1 18.05C1 18.4 1 18.89 1.33 19.32C1.83 20 2.71 20 3 20H9C10.26 20 12.53 19.13 12.93 16H15.59L17.59 18H15V20H20C21.65 20 23 18.65 23 17H21C21 17.43 20.73 17.79 20.34 17.93M9 18H3.25C3.33 17.95 3.41 17.91 3.5 17.87L8.22 15.17L10.92 16C10.58 17.84 9.28 18 9 18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSnowmobile.svg',
  mixins: [icon]
};
</script>