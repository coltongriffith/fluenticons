<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hydraulic-oil-temperature" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 18C7.34 18 6 16.66 6 15C6 13 9 9.63 9 9.63S12 13 12 15C12 16.66 10.66 18 9 18M14 4V20H4V4H2V20C2 21.11 2.89 22 4 22H14C15.11 22 16 21.11 16 20V4H14M10 6V2H8V6H5V8H13V6H10M21 17.5V5.5C21 4.67 20.33 4 19.5 4S18 4.67 18 5.5V17.5C17.37 17.97 17 18.71 17 19.5C17 20.88 18.12 22 19.5 22S22 20.88 22 19.5C22 18.71 21.63 18 21 17.5M20 13H19V6H20V13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHydraulicOilTemperature.svg',
  mixins: [icon]
};
</script>