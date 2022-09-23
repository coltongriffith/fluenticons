<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hard-hat" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.87,12.15L9,6.46C10.95,5.84 13.05,5.84 15,6.46L14.13,12.15C14.06,12.64 13.63,13 13.13,13H10.86C10.37,13 9.94,12.64 9.87,12.15M22,16V16C22,15.21 21.53,14.5 20.8,14.17C20.32,11.86 18.96,9.83 17,8.5L15.24,13.34C15.1,13.74 14.72,14 14.3,14H9.7C9.28,14 8.9,13.74 8.76,13.34L7,8.5C5.04,9.83 3.68,11.86 3.2,14.16C2.47,14.5 2,15.2 2,16L8.45,17.84C8.81,17.94 9.18,18 9.55,18H14.43C14.8,18 15.17,17.94 15.53,17.84L22,16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHardHat.svg',
  mixins: [icon]
};
</script>