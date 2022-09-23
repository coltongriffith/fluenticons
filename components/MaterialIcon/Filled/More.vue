<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-more" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,13.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 20.5,12A1.5,1.5 0 0,1 19,13.5M14,13.5A1.5,1.5 0 0,1 12.5,12A1.5,1.5 0 0,1 14,10.5A1.5,1.5 0 0,1 15.5,12A1.5,1.5 0 0,1 14,13.5M9,13.5A1.5,1.5 0 0,1 7.5,12A1.5,1.5 0 0,1 9,10.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 9,13.5M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.37,21 7.06,21H22A2,2 0 0,0 24,19V5C24,3.89 23.1,3 22,3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMore.svg',
  mixins: [icon]
};
</script>