<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-abjad-hebrew" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3.9 4L9 10.03C7.58 10.17 6.36 11.18 6 12.59L4 20H6.07L7.92 13.11C8.09 12.46 8.69 12 9.36 12H10.69L17.47 20H20.1L15 13.97C16.42 13.83 17.64 12.82 18 11.41L20 4H17.93L16.08 10.89C15.91 11.54 15.31 12 14.64 12H13.31L6.53 4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAbjadHebrew.svg',
  mixins: [icon]
};
</script>