<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-music-rest-sixteenth" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15 3A5.56 5.56 0 0 1 11.95 4.86A1.5 1.5 0 1 0 10.5 6H10.74A6.32 6.32 0 0 0 14.25 4.93L12.9 9.1A5.56 5.56 0 0 1 9.95 10.86A1.5 1.5 0 1 0 8.5 12H8.74A6.32 6.32 0 0 0 12.25 10.93L9 21H11L17 3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMusicRestSixteenth.svg',
  mixins: [icon]
};
</script>