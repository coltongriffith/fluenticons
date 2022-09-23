<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-vector-difference" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,1C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16H5V14H3V3H14V5H16V3C16,1.89 15.11,1 14,1H3M9,7C7.89,7 7,7.89 7,9V11H9V9H11V7H9M13,7V9H14V10H16V7H13M18,7V9H20V20H9V18H7V20C7,21.11 7.89,22 9,22H20C21.11,22 22,21.11 22,20V9C22,7.89 21.11,7 20,7H18M14,12V14H12V16H14C15.11,16 16,15.11 16,14V12H14M7,13V16H10V14H9V13H7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVectorDifference.svg',
  mixins: [icon]
};
</script>