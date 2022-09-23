<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-tractor" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5,4V11.26C3.2,11.9 2,13.6 2,15.5C2,18 4,20 6.5,20C8.79,20 10.71,18.28 10.97,16H15.17C15.06,16.32 15,16.66 15,17A3,3 0 0,0 18,20A3,3 0 0,0 21,17C21,16.66 20.94,16.32 20.82,16H22V13C22,11.89 21.11,11 20,11H15.04L13.65,4H5M7,6H12L13,11V14H10.74C10.16,12.38 8.71,11.23 7,11.03V6M6.5,13.25A2.25,2.25 0 0,1 8.75,15.5A2.25,2.25 0 0,1 6.5,17.75A2.25,2.25 0 0,1 4.25,15.5A2.25,2.25 0 0,1 6.5,13.25M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTractor.svg',
  mixins: [icon]
};
</script>