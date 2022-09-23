<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-train-car-centerbeam-full" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23 6V17H22C22 18.11 21.11 19 20 19S18 18.11 18 17H6C6 18.11 5.11 19 4 19S2 18.11 2 17H1V6H3V15H21V6H23M8 12H4V14H8V12M15 12H9V14H15V12M20 12H16V14H20V12M8 9H4V11H8V9M15 9H9V11H15V9M20 9H16V11H20V9M8 6H4V8H8V6M15 6H9V8H15V6M20 6H16V8H20V6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTrainCarCenterbeamFull.svg',
  mixins: [icon]
};
</script>