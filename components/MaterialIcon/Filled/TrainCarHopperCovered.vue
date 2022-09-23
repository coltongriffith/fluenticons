<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-train-car-hopper-covered" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23 9V7H1V9L2 10.33V15H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H10L11 18H13L14 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V15H22V10.33L23 9M4 15V13L5.5 15H4M5 10V9H19V10H5M20 15H18.5L20 13V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTrainCarHopperCovered.svg',
  mixins: [icon]
};
</script>