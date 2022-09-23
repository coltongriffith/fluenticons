<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-diversify" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 2V4H12C10.9 4 10 4.89 10 6V9H12V6H19V8L22 5L19 2M19 9V11H14V13H19V15L22 12L19 9M11.05 10C9.94 10 9.04 10.87 9.03 12S9.9 14 11 14C12.11 14 13 13.11 13 12C13 10.91 12.13 10.03 11.05 10M2 11V13H8V11H2M10 15V18C10 19.11 10.9 20 12 20H19V22L22 19L19 16V18H12V15H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDiversify.svg',
  mixins: [icon]
};
</script>