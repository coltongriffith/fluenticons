<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-glass-tulip" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8,2H16C15.67,2.67 15.33,3.33 15.58,5C15.83,6.67 16.67,9.33 16.25,10.74C15.83,12.14 14.17,12.28 13.33,13.86C12.5,15.44 12.5,18.47 13.08,19.9C13.67,21.33 14.83,21.17 15.42,21.25C16,21.33 16,21.67 16,22H8C8,21.67 8,21.33 8.58,21.25C9.17,21.17 10.33,21.33 10.92,19.9C11.5,18.47 11.5,15.44 10.67,13.86C9.83,12.28 8.17,12.14 7.75,10.74C7.33,9.33 8.17,6.67 8.42,5C8.67,3.33 8.33,2.67 8,2M10,4C10,5.19 9.83,6.17 9.64,7H14.27C14.13,6.17 14,5.19 14,4H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGlassTulip.svg',
  mixins: [icon]
};
</script>