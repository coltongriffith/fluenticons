<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-vector-bezier" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7.5,4A1.5,1.5 0 0,0 6,5.5A1.5,1.5 0 0,0 7.5,7C8.13,7 8.7,6.6 8.91,6H13C13.67,5.33 14.33,5 15,5H8.91C8.7,4.4 8.13,4 7.5,4M19,5C8,5 14,17 5,17V19C16,19 10,7 19,7V5M16.5,17C15.87,17 15.3,17.4 15.09,18H11C10.33,18.67 9.67,19 9,19H15.09C15.3,19.6 15.87,20 16.5,20A1.5,1.5 0 0,0 18,18.5A1.5,1.5 0 0,0 16.5,17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVectorBezier.svg',
  mixins: [icon]
};
</script>