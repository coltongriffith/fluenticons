<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-golf" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.5,18A1.5,1.5 0 0,1 21,19.5A1.5,1.5 0 0,1 19.5,21A1.5,1.5 0 0,1 18,19.5A1.5,1.5 0 0,1 19.5,18M17,5.92L11,9V18.03C13.84,18.19 16,19 16,20C16,21.1 13.31,22 10,22C6.69,22 4,21.1 4,20C4,19.26 5.21,18.62 7,18.27V20H9V2L17,5.92Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGolf.svg',
  mixins: [icon]
};
</script>