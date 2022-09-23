<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-music-accidental-double-flat" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.5 9C14.8 9 14.11 9.28 13.5 9.67V5H11.5V9.62C11.04 9.24 10.39 9 9.5 9C8.8 9 8.11 9.28 7.5 9.67V5H5.5V19C8.5 17.32 10.43 15.79 11.5 14.41V19C16.36 16.26 18.5 13.91 18.5 12C18.5 10.59 17.79 9 15.5 9M7.5 15.38V12.26C8.12 11.59 8.95 11 9.5 11C10.09 11 10.5 11.07 10.5 12C10.5 12.15 10.4 13.3 7.5 15.38M13.5 15.38V12.26C14.12 11.59 14.95 11 15.5 11C16.09 11 16.5 11.07 16.5 12C16.5 12.15 16.4 13.3 13.5 15.38Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMusicAccidentalDoubleFlat.svg',
  mixins: [icon]
};
</script>