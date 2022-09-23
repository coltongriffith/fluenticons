<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-radio-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1 4.27L3 6.27C2.4 6.61 2 7.26 2 8V20C2 21.11 2.9 22 4 22H18.73L20.73 24L22 22.72L2.28 3L1 4.27M20 6H8.83L16.47 2.83L15.71 1L6.59 4.76L9.82 8H20V12H18V10H16V12H13.82L22 20.18V8C22 6.9 21.11 6 20 6M4 8H4.73L8.73 12H4V8M7 14C8.66 14 10 15.34 10 17C10 18.66 8.66 20 7 20C5.34 20 4 18.66 4 17C4 15.34 5.34 14 7 14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRadioOff.svg',
  mixins: [icon]
};
</script>