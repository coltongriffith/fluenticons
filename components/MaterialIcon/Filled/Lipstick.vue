<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-lipstick" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 23C8.45 23 8 22.55 8 22V13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13V22C16 22.55 15.55 23 15 23H9M10 11C9.45 11 9 10.55 9 10V5.25C9 5.25 11 3 11.75 1C12.83 1.67 13.92 2.33 14.46 3.83C15 5.33 15 7.67 15 10C15 10.55 14.55 11 14 11H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLipstick.svg',
  mixins: [icon]
};
</script>