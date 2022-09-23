<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-lan-check" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 1C2.89 1 2 1.89 2 3V7C2 8.11 2.89 9 4 9H1V11H13V9H10C11.11 9 12 8.11 12 7V3C12 1.89 11.11 1 10 1H4M4 3H10V7H4V3M14 13C12.89 13 12 13.89 12 15V19C12 20.11 12.89 21 14 21H11V23H23V21H20C21.11 21 22 20.11 22 19V15C22 13.89 21.11 13 20 13H14M14 15H20V19H14V15M5.5 20.5L10.5 15.5L9 14L5.5 17.5L3.5 15.5L2 17L5.5 20.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLanCheck.svg',
  mixins: [icon]
};
</script>