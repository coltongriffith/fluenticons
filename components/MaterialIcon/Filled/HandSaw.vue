<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hand-saw" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.8,17L5.9,11.6L20,2L22,5V8H19V11H16V14H13V17M9.7,18.7L9.2,21.5L7.6,22.7C6.7,23.3 5.5,23.1 4.8,22.2L1.3,17.3C0.7,16.4 0.9,15.2 1.8,14.5L5.1,12.2L9.7,18.7M4.6,15L3,16.1L6.5,21L8.1,19.8L4.6,15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHandSaw.svg',
  mixins: [icon]
};
</script>