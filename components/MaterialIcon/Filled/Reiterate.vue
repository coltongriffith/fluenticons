<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-reiterate" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10.5 4A6.5 6.5 0 0 0 4 10H1L5 14L9 10H6.03A4.5 4.5 0 0 1 10.5 6A4.5 4.5 0 0 1 15 10.5A4.5 4.5 0 0 1 10.5 15H2V17H10.5A6.5 6.5 0 0 0 17 10.5A6.5 6.5 0 0 0 10.5 4M19 12V15H16.5A7.5 7.5 0 0 1 14.24 17H19V20L23 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledReiterate.svg',
  mixins: [icon]
};
</script>