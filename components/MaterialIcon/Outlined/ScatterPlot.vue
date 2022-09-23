<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-scatter-plot-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7,18A4,4 0 0,1 3,14A4,4 0 0,1 7,10A4,4 0 0,1 11,14A4,4 0 0,1 7,18M7,12A2,2 0 0,0 5,14A2,2 0 0,0 7,16A2,2 0 0,0 9,14A2,2 0 0,0 7,12M11,10A4,4 0 0,1 7,6A4,4 0 0,1 11,2A4,4 0 0,1 15,6A4,4 0 0,1 11,10M11,4A2,2 0 0,0 9,6A2,2 0 0,0 11,8A2,2 0 0,0 13,6A2,2 0 0,0 11,4M16.6,21.6C14.39,21.6 12.6,19.81 12.6,17.6A4,4 0 0,1 16.6,13.6C18.81,13.6 20.6,15.39 20.6,17.6A4,4 0 0,1 16.6,21.6M16.6,15.6A2,2 0 0,0 14.6,17.6C14.6,18.7 15.5,19.6 16.6,19.6A2,2 0 0,0 18.6,17.6C18.6,16.5 17.7,15.6 16.6,15.6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedScatterPlot',
  mixins: [icon]
};
</script>