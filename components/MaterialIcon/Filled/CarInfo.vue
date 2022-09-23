<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-car-info" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 15H17V13H19M20 20V22H16V20H17V18H16V16H19V20M18.92 5A1.5 1.5 0 0 0 17.5 4H6.5A1.5 1.5 0 0 0 5.08 5L3 11V19A1 1 0 0 0 4 20H5A1 1 0 0 0 6 19V18H11A7 7 0 0 1 18 11A6.84 6.84 0 0 1 21 11.68V11M6.5 15A1.5 1.5 0 1 1 8 13.5A1.5 1.5 0 0 1 6.5 15M5 10L6.5 5.5H17.5L19 10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCarInfo.svg',
  mixins: [icon]
};
</script>