<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-margin" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,4V9L18.5,7.5L5.5,20.5L3.5,18.5L16.5,5.5L15,4H20M17,20A3,3 0 0,1 14,17V15A3,3 0 0,1 17,12A3,3 0 0,1 20,15V17A3,3 0 0,1 17,20M17,14A1,1 0 0,0 16,15V17A1,1 0 0,0 17,18A1,1 0 0,0 18,17V15A1,1 0 0,0 17,14M7,12A3,3 0 0,1 4,9V7A3,3 0 0,1 7,4A3,3 0 0,1 10,7V9A3,3 0 0,1 7,12M7,6A1,1 0 0,0 6,7V9A1,1 0 0,0 7,10A1,1 0 0,0 8,9V7A1,1 0 0,0 7,6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMargin.svg',
  mixins: [icon]
};
</script>