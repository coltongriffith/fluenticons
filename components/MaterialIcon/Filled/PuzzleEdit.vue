<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-puzzle-edit" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21.04 12.13C20.9 12.13 20.76 12.19 20.65 12.3L19.65 13.3L21.7 15.35L22.7 14.35C22.92 14.14 22.92 13.79 22.7 13.58L21.42 12.3C21.31 12.19 21.18 12.13 21.04 12.13M19.07 13.88L13 19.94V22H15.06L21.12 15.93L19.07 13.88M19 11.12L11.91 18.2C11.5 17.95 11 17.8 10.5 17.8C9 17.8 7.8 19 7.8 20.5V22H4C2.9 22 2 21.11 2 20V16.2H3.5C5 16.2 6.2 15 6.2 13.5S5 10.8 3.5 10.8H2V7C2 5.9 2.9 5 4 5H8V3.5C8 2.12 9.12 1 10.5 1S13 2.12 13 3.5V5H17C18.1 5 19 5.89 19 7V11.12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPuzzleEdit.svg',
  mixins: [icon]
};
</script>