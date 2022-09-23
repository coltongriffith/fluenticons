<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-film" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3.5,3H5V1.8C5,1.36 5.36,1 5.8,1H10.2C10.64,1 11,1.36 11,1.8V3H12.5A1.5,1.5 0 0,1 14,4.5V5H22V20H14V20.5A1.5,1.5 0 0,1 12.5,22H3.5A1.5,1.5 0 0,1 2,20.5V4.5A1.5,1.5 0 0,1 3.5,3M18,7V9H20V7H18M14,7V9H16V7H14M10,7V9H12V7H10M14,16V18H16V16H14M18,16V18H20V16H18M10,16V18H12V16H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFilm.svg',
  mixins: [icon]
};
</script>