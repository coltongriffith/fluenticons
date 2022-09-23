<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-star-shooting" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.09 11.77L19.56 18.1L14 14.74L8.44 18.1L9.9 11.77L5 7.5L11.47 6.96L14 1L16.53 6.96L23 7.5L18.09 11.77M2 12.43C2.19 12.43 2.38 12.37 2.55 12.26L5.75 10.15L4.18 8.79L1.45 10.59C.989 10.89 .861 11.5 1.16 12C1.36 12.27 1.68 12.43 2 12.43M1.16 21.55C1.36 21.84 1.68 22 2 22C2.19 22 2.38 21.95 2.55 21.84L6.66 19.13L7 17.76L7.31 16.31L1.45 20.16C.989 20.47 .861 21.09 1.16 21.55M1.45 15.38C.989 15.68 .861 16.3 1.16 16.76C1.36 17.06 1.68 17.21 2 17.21C2.19 17.21 2.38 17.16 2.55 17.05L7.97 13.5L8.24 12.31L7.32 11.5L1.45 15.38Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledStarShooting.svg',
  mixins: [icon]
};
</script>