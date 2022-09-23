<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-order-bool-ascending" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 3C3.79 3 2 4.79 2 7S3.79 11 6 11 10 9.21 10 7 8.21 3 6 3M6 9C4.9 9 4 8.1 4 7S4.9 5 6 5 8 5.9 8 7 7.1 9 6 9M6 13C3.79 13 2 14.79 2 17S3.79 21 6 21 10 19.21 10 17 8.21 13 6 13M12 5H22V7H12V5M12 19V17H22V19H12M12 11H22V13H12V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledOrderBoolAscending.svg',
  mixins: [icon]
};
</script>