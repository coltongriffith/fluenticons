<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-periodic-table" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,4V6H4V4H2M20,4V6H22V4H20M2,7V9H4V7H2M5,7V9H7V7H5M14,7V9H16V7H14M17,7V9H19V7H17M20,7V9H22V7H20M2,10V12H4V10H2M5,10V12H7V10H5M8,10V12H10V10H8M11,10V12H13V10H11M14,10V12H16V10H14M17,10V12H19V10H17M20,10V12H22V10H20M2,13V15H4V13H2M5,13V15H7V13H5M8,13V15H10V13H8M11,13V15H13V13H11M14,13V15H16V13H14M17,13V15H19V13H17M20,13V15H22V13H20M5,17V19H7V17H5M8,17V19H10V17H8M11,17V19H13V17H11M14,17V19H16V17H14M17,17V19H19V17H17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPeriodicTable.svg',
  mixins: [icon]
};
</script>