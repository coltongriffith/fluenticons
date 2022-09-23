<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-rake" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10.5 17.05L9.43 16L22.07 3.35L20.66 1.93L8 14.58L6.95 13.5C6.17 12.73 4.9 12.73 4.12 13.5L2 15.64L2.71 16.34L4.83 14.22L5.54 14.93L3.41 17.05L4.12 17.76L6.24 15.64L6.95 16.34L4.83 18.46L5.54 19.17L7.66 17.05L8.36 17.76L6.24 19.88L6.95 20.59L9.07 18.46L9.78 19.17L7.66 21.29L8.36 22L10.5 19.88C11.27 19.1 11.27 17.83 10.5 17.05Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRake.svg',
  mixins: [icon]
};
</script>