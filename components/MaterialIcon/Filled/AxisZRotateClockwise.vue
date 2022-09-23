<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-axis-z-rotate-clockwise" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,12L10,16L14,20V16.9C18.56,16.44 22,14.42 22,12C22,9.58 18.56,7.56 14,7.1V9.09C17.45,9.43 20,10.6 20,12C20,13.4 17.45,14.57 14,14.91V12M4,12C4,10.6 6.55,9.43 10,9.09V7.1C5.44,7.56 2,9.58 2,12C2,14.16 4.74,16 8.58,16.7L7.88,16L9.08,14.79C6.11,14.36 4,13.27 4,12M13,2H11V13L13,11V2M13,22V21L11,19V22H13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAxisZRotateClockwise.svg',
  mixins: [icon]
};
</script>