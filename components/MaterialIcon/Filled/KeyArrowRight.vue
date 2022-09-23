<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-key-arrow-right" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.7 6C11.1 4.2 9.4 3 7.5 3C5 3 3 5 3 7.5S5 12 7.5 12C9.5 12 11.1 10.8 11.7 9H15V12H18V9H21V6H11.7M7.5 9C6.7 9 6 8.3 6 7.5S6.7 6 7.5 6 9 6.7 9 7.5 8.3 9 7.5 9M13 21V19H8V17H13V15L16 18L13 21" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledKeyArrowRight.svg',
  mixins: [icon]
};
</script>