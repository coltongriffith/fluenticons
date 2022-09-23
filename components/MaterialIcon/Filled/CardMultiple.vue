<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-card-multiple" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 3C21.53 3 22.04 3.21 22.41 3.59C22.79 3.96 23 4.47 23 5V15C23 15.53 22.79 16.04 22.41 16.41C22.04 16.79 21.53 17 21 17H7C6.47 17 5.96 16.79 5.59 16.41C5.21 16.04 5 15.53 5 15V5C5 4.47 5.21 3.96 5.59 3.59C5.96 3.21 6.47 3 7 3H21M3 19H18V21H3C2.47 21 1.96 20.79 1.59 20.41C1.21 20.04 1 19.53 1 19V8H3V19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCardMultiple.svg',
  mixins: [icon]
};
</script>