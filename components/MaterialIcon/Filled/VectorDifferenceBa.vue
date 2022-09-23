<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-vector-difference-ba" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,22C21.11,22 22,21.11 22,20V18H20V20H18V22H20M16,22V20H13V22H16M11,22V20H9V18H7V20C7,21.11 7.89,22 9,22H11M22,16V13H20V16H22M9,16C9,16 9,11.33 9,9C11.33,9 16,9 16,9C16,9 16,5 16,3C16,1.89 15.11,1 14,1H3C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16C5,16 9,16 9,16M7,14H3V3H14V7H9C7.89,7 7,7.89 7,9V14M22,11V9C22,7.89 21.11,7 20,7H18V9H20V11H22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVectorDifferenceBa.svg',
  mixins: [icon]
};
</script>