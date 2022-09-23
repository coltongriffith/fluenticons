<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-puzzle-check" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M20.5 11C21.88 11 23 12.12 23 13.5C23 13.81 22.94 14.11 22.84 14.39C21.8 13.5 20.46 13 19 13C15.69 13 13 15.69 13 19V19.54C12.64 18.5 11.65 17.8 10.5 17.8C9 17.8 7.8 19 7.8 20.5V22H4C2.9 22 2 21.1 2 20V16.2H3.5C5 16.2 6.2 15 6.2 13.5S5 10.8 3.5 10.8H2V7C2 5.89 2.9 5 4 5H8V3.5C8 2.12 9.12 .998 10.5 .998S13 2.12 13 3.5V5H17C18.1 5 19 5.89 19 7V11H20.5" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPuzzleCheck.svg',
  mixins: [icon]
};
</script>