<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-math-cos" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4,7A2,2 0 0,0 2,9V15A2,2 0 0,0 4,17H6A2,2 0 0,0 8,15V14H6V15H4V9H6V10H8V9A2,2 0 0,0 6,7H4M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M18,7A2,2 0 0,0 16,9V11A2,2 0 0,0 18,13H20V15H16V17H20A2,2 0 0,0 22,15V13A2,2 0 0,0 20,11H18V9H22V7H18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMathCos.svg',
  mixins: [icon]
};
</script>