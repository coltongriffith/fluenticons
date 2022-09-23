<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-violin" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11,2A1,1 0 0,0 10,3V5L10,9A0.5,0.5 0 0,0 10.5,9.5H12A0.5,0.5 0 0,1 12.5,10A0.5,0.5 0 0,1 12,10.5H10.5C9.73,10.5 9,9.77 9,9V5.16C7.27,5.6 6,7.13 6,9V10.5A2.5,2.5 0 0,1 8.5,13A2.5,2.5 0 0,1 6,15.5V17C6,19.77 8.23,22 11,22H13C15.77,22 18,19.77 18,17V15.5A2.5,2.5 0 0,1 15.5,13A2.5,2.5 0 0,1 18,10.5V9C18,6.78 16.22,5 14,5V3A1,1 0 0,0 13,2H11M10.75,16.5H13.25L12.75,20H11.25L10.75,16.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledViolin.svg',
  mixins: [icon]
};
</script>