<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-smart-card-reader" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 4A2.07 2.07 0 0 0 19 2H5A2.07 2.07 0 0 0 3 4V18H21M8.25 16H7V6H8.25C9.91 6 10.75 9.34 10.75 11S9.91 16 8.25 16M14.5 13.5A2.5 2.5 0 1 1 17 11A2.5 2.5 0 0 1 14.5 13.5M23 21V22H1V21A2 2 0 0 1 3 19H21A2 2 0 0 1 23 21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSmartCardReader.svg',
  mixins: [icon]
};
</script>