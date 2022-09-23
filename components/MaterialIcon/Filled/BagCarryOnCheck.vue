<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bag-carry-on-check" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.28,16.69L18.14,13.88L18.84,14.58L15.28,18.14L13.17,16L13.88,15.28L15.28,16.69M8,21A2,2 0 0,1 6,19V9A2,2 0 0,1 8,7V21M9,7H14V4A2,2 0 0,1 12,2H16V10A6,6 0 0,1 22,16A6,6 0 0,1 16,22C14.77,22 13.63,21.63 12.68,21H9V7M16,12A4,4 0 0,0 12,16A4,4 0 0,0 16,20A4,4 0 0,0 20,16A4,4 0 0,0 16,12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBagCarryOnCheck.svg',
  mixins: [icon]
};
</script>