<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-smart-card" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 3H22A2.07 2.07 0 0 1 24 5V19A2.07 2.07 0 0 1 22 21H2A2.07 2.07 0 0 1 0 19V5A2.07 2.07 0 0 1 2 3M8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91M8 6A3 3 0 1 0 11 9A3 3 0 0 0 8 6M17 10V13H21V10H17" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSmartCard.svg',
  mixins: [icon]
};
</script>