<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bunk-bed" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1 2V23H3V21H21V23H23V7C23 4.79 21.21 3 19 3H10V8H3V2M6.5 2A2.5 2.5 0 0 0 4 4.5A2.5 2.5 0 0 0 6.5 7A2.5 2.5 0 0 0 9 4.5A2.5 2.5 0 0 0 6.5 2M3 11H21V13.56C20.41 13.21 19.73 13 19 13H10V18H3M6.5 12A2.5 2.5 0 0 0 4 14.5A2.5 2.5 0 0 0 6.5 17A2.5 2.5 0 0 0 9 14.5A2.5 2.5 0 0 0 6.5 12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBunkBed.svg',
  mixins: [icon]
};
</script>