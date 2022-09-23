<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hockey-sticks" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.68 4H14.3L12.56 8C12.53 8.04 12.45 8.22 12.31 8.5S12.06 9.04 12 9.19L9.7 4H6.32L10.41 12.84C10.5 13.06 10.73 13.59 11.11 14.43C11.5 15.28 11.78 15.91 12 16.35L13.41 19.44C13.6 19.78 13.89 19.95 14.3 19.95L19 20V16H15L13.6 12.84L17.68 4M20.03 16V20H22V17C22 16.73 21.91 16.5 21.72 16.28C21.53 16.08 21.3 16 21 16H20.03M5 16V20L9.7 19.95C10.11 19.95 10.4 19.78 10.59 19.44L11.44 17.5L9.84 14.06L9 16H5M2 20H3.97V16H3C2.7 16 2.47 16.08 2.28 16.28C2.09 16.5 2 16.73 2 17V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHockeySticks.svg',
  mixins: [icon]
};
</script>