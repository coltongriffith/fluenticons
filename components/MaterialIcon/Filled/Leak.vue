<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-leak" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6,3H3V6A3,3 0 0,0 6,3M14,3H12A9,9 0 0,1 3,12V14C9.08,14 14,9.07 14,3M10,3H8A5,5 0 0,1 3,8V10A7,7 0 0,0 10,3M10,21H12A9,9 0 0,1 21,12V10A11,11 0 0,0 10,21M18,21H21V18A3,3 0 0,0 18,21M14,21H16A5,5 0 0,1 21,16V14A7,7 0 0,0 14,21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLeak.svg',
  mixins: [icon]
};
</script>