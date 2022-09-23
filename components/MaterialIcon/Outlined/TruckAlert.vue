<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-truck-alert-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8 12H10V14H8V12M8 7H10V11H8V7M18 18.5C18.8 18.5 19.5 17.8 19.5 17S18.8 15.5 18 15.5 16.5 16.2 16.5 17 17.2 18.5 18 18.5M19.5 9.5H17V12H21.5L19.5 9.5M6 18.5C6.8 18.5 7.5 17.8 7.5 17S6.8 15.5 6 15.5 4.5 16.2 4.5 17 5.2 18.5 6 18.5M20 8L23 12V17H21C21 18.7 19.7 20 18 20S15 18.7 15 17H9C9 18.7 7.7 20 6 20S3 18.7 3 17H1V6C1 4.9 1.9 4 3 4H17V8H20M3 6V15H3.8C4.3 14.4 5.2 14 6 14S7.7 14.4 8.2 15H15V6H3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedTruckAlert',
  mixins: [icon]
};
</script>