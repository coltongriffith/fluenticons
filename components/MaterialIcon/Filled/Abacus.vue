<template>
  <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-abacus" viewBox="0 0 24 24">
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
    </radialGradient>
    <path :fill="fill" :fill-opacity="opacity"
      d="M5 5H7V11H5V5M10 5H8V11H10V5M5 19H7V13H5V19M10 13H8V19H10V17H15V15H10V13M2 21H4V3H2V21M20 3V7H13V5H11V11H13V9H20V15H18V13H16V19H18V17H20V21H22V3H20Z"
    />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: "MaterialIconFilledAbacus.svg",
  mixins: [icon],
};
</script>