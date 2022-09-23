<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-glass-cocktail-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.33 12.67L7.66 7L6.13 5.47L2.39 1.73L1.11 3L3 4.89V5L11 13V19H6V21H18V19.89L20.84 22.73L22.11 21.46L13.33 12.67M13 19V14.89L17.11 19H13M8.2 5L6.2 3H21V5L14.6 11.4L10.2 7H16.5L18.5 5H8.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGlassCocktailOff.svg',
  mixins: [icon]
};
</script>