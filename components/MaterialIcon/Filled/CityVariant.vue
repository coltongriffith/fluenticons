<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-city-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,9V7A2,2 0 0,0 17,5H16V2H14V5H13A2,2 0 0,0 11,7V9A2,2 0 0,0 9,11V12H5A2,2 0 0,0 3,14V22H6V20H8V22H12V20H14V22H16V20H18V22H21V11A2,2 0 0,0 19,9M8,18H6V16H8V18M14,18H12V16H14V18M14,14H12V12H14V14M13,9V7H17V9H13M18,18H16V16H18V18M18,14H16V12H18V14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCityVariant.svg',
  mixins: [icon]
};
</script>