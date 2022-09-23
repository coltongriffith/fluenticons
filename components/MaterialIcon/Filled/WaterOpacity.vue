<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-water-opacity" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16 14V12H17.61C17.85 12.71 18 13.39 18 14H16M15.58 8C15.12 7.29 14.65 6.61 14.2 6H14V8H15.58M16 12V10H14V12H16M16 8.68V10H16.74C16.5 9.56 16.26 9.11 16 8.68M12 16V14H14V12H12V10H14V8H12V6H14V5.73C12.9 4.26 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20V18H14V16H12M14 19.65C14.75 19.39 15.42 19 16 18.46V18H14V19.65M14 16H16V14H14V16M16 18H16.46C17 17.42 17.39 16.75 17.65 16H16V18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWaterOpacity.svg',
  mixins: [icon]
};
</script>