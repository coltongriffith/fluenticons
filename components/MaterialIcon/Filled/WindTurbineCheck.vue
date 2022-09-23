<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-wind-turbine-check" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.33 11.67L14.21 14.58C15.62 13.16 14.21 11.75 14.21 11.75L12.72 10.24C12.9 9.86 13 9.44 13 9C13 7.95 12.46 7.03 11.64 6.5L13 2.11C11.09 1.53 10.5 3.44 10.5 3.44L9.69 6.03C8.46 6.16 7.46 7 7.13 8.18L2.67 9.63C3.31 11.53 5.2 10.9 5.2 10.9L7.27 10.23C7.61 10.97 8.23 11.54 9 11.82V19C9 19 7 19 7 21V22H13V21C13 21 13 19 11 19V11.82C11.12 11.78 11.23 11.72 11.33 11.67M8.5 9C8.5 8.17 9.17 7.5 10 7.5S11.5 8.17 11.5 9 10.83 10.5 10 10.5 8.5 9.83 8.5 9M16.75 21.16L14 18.16L15.16 17L16.75 18.59L20.34 15L21.5 16.41L16.75 21.16" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWindTurbineCheck.svg',
  mixins: [icon]
};
</script>