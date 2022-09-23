<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-ultra-high-definition" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9,7H11V11H13V7H15V17H13V13H11V17H9V7M17,7H20A3,3 0 0,1 23,10V14A3,3 0 0,1 20,17H17V7M20,15A1,1 0 0,0 21,14V10A1,1 0 0,0 20,9H19V15H20M7,14A3,3 0 0,1 4,17A3,3 0 0,1 1,14V7H3V14A1,1 0 0,0 4,15A1,1 0 0,0 5,14V7H7V14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledUltraHighDefinition.svg',
  mixins: [icon]
};
</script>