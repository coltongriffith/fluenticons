<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-golf-cart" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.89 12.37L18.25 5H19V3H3V7H1V9H3V12.54A6 6 0 0 0 1 17V19H3A3 3 0 0 0 9 19H15A3 3 0 0 0 21 19H23V17A5 5 0 0 0 19.89 12.37M6 20.5A1.5 1.5 0 1 1 7.5 19A1.5 1.5 0 0 1 6 20.5M15.53 12L14.38 10.28L15.8 9.33L14.7 7.67L10.2 10.67L11.3 12.33L12.73 11.38L13.88 13.12L13 14H10.2L5 7V5H16.2L17.75 12M18 20.5A1.5 1.5 0 1 1 19.5 19A1.5 1.5 0 0 1 18 20.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGolfCart.svg',
  mixins: [icon]
};
</script>