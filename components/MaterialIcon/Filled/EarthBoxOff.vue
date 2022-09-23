<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-earth-box-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23,4.27L21,6.27V19A2,2 0 0,1 19,21H6.27L4.27,23L3,21.72L21.72,3L23,4.27M5,3H19.18L17.18,5H15.78C15.67,6 14.83,6.79 13.8,6.79H11.8V8.79C11.8,9.35 11.35,9.79 10.8,9.79H8.8V11.79H10.38L8.55,13.62L5,10.29V17.18L3,19.18V5C3,3.89 3.89,3 5,3M11.8,19V17.79C11.17,17.79 10.6,17.5 10.23,17.04L8.27,19H11.8M15.8,12.79V15.79H16.8C17.69,15.79 18.74,16.38 19,17.18V8.27L15.33,11.94C15.61,12.12 15.8,12.43 15.8,12.79Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEarthBoxOff.svg',
  mixins: [icon]
};
</script>