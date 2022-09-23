<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-magnify-remove-cursor" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1 1V8L8 1H1M18 16H17.42L16.61 15.19C17.5 14 18 12.5 18 11C18 7.13 14.87 4 11 4C9.5 4 8 4.5 6.79 5.4C3.7 7.72 3.07 12.11 5.39 15.2C7.71 18.29 12.1 18.92 15.19 16.6L16 17.41V18L21 23L23 21L18 16M14.6 13.16L13.18 14.58L11.06 12.45L8.94 14.58L7.5 13.16L9.65 11.04L7.5 8.92L8.94 7.5L11.06 9.63L13.18 7.5L14.6 8.92L12.47 11.04L14.6 13.16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMagnifyRemoveCursor.svg',
  mixins: [icon]
};
</script>