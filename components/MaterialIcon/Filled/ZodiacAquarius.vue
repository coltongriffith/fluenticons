<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-zodiac-aquarius" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15,12.41L12,9.41L9,12.41L6,9.41L3.71,11.71L2.29,10.29L6,6.59L9,9.59L12,6.59L15,9.59L18,6.59L21.71,10.29L20.29,11.71L18,9.41L15,12.41M18,15.41L20.29,17.71L21.71,16.29L18,12.59L15,15.59L12,12.59L9,15.59L6,12.59L2.29,16.29L3.71,17.71L6,15.41L9,18.41L12,15.41L15,18.41L18,15.41Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledZodiacAquarius.svg',
  mixins: [icon]
};
</script>