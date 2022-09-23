<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-mower" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5 14C17.55 14 16.69 14.38 16.06 15H9.39L5.74 3H2V5H4.26L7 14.05C6.85 14.03 6.68 14 6.5 14C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21C7.89 21 9.09 20.18 9.65 19H15.35C15.91 20.18 17.11 21 18.5 21C20.43 21 22 19.43 22 17.5S20.43 14 18.5 14M6.5 19C5.67 19 5 18.33 5 17.5S5.67 16 6.5 16 8 16.67 8 17.5 7.33 19 6.5 19M18.5 19C17.67 19 17 18.33 17 17.5S17.67 16 18.5 16 20 16.67 20 17.5 19.33 19 18.5 19M10.13 14L9.53 12H12.76C13.5 12 14.21 12.43 14.55 13.11L15 14H10.13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMower.svg',
  mixins: [icon]
};
</script>