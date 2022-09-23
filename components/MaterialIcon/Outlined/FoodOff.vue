<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-food-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1 21H16V22C16 22.54 15.56 23 15 23H2C1.45 23 1 22.54 1 22V21M20.5 23.31L16 18.83V19H1V17H14.17L12.17 15H1C1 11.76 3.46 9.83 6.38 9.21L.68 3.5L2.1 2.1L13 13L15 15L21.9 21.9L20.5 23.31M10.17 13L8.17 11C6.75 11.06 4.65 11.56 3.62 13H10.17M23 5H18V1H16V5H11L11.23 7H20.79L19.79 16.97L21.62 18.8L23 5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFoodOff',
  mixins: [icon]
};
</script>