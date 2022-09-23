<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-television-shimmer" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 17H3V5H21M21 3H3C1.9 3 1 3.9 1 5V17C1 18.11 1.9 19 3 19H8V21H16V19H21C22.11 19 23 18.11 23 17V5C23 3.9 22.11 3 21 3M15 6.5L14.38 7.87L13 8.5L14.38 9.13L15 10.5L15.63 9.13L17 8.5L15.63 7.87L15 6.5M10.5 8.5L9.41 10.91L7 12L9.41 13.09L10.5 15.5L11.6 13.09L14 12L11.6 10.91L10.5 8.5" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTelevisionShimmer.svg',
  mixins: [icon]
};
</script>