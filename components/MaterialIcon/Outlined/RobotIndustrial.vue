<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-robot-industrial-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 19H8.6L2.62 8.64C2.23 8 2 7.29 2 6.5C2 4.29 3.79 2.5 6 2.5C7.86 2.5 9.43 3.78 9.87 5.5H14V3C14 1.9 14.9 1 16 1V3.59L17.59 2H22V4H18.41L16 6.41V6.59L18.41 9H22V11H17.59L16 9.41V12C14.9 12 14 11.11 14 10V7.5H9.87C9.77 7.89 9.61 8.26 9.41 8.6L15.41 19H20C21.11 19 22 19.9 22 21V22H2V21C2 19.9 2.9 19 4 19M7.91 10C7.35 10.32 6.7 10.5 6 10.5L10.91 19H13.1L7.91 10M6 4.5C4.89 4.5 4 5.4 4 6.5C4 7.61 4.89 8.5 6 8.5C7.11 8.5 8 7.61 8 6.5C8 5.4 7.11 4.5 6 4.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedRobotIndustrial',
  mixins: [icon]
};
</script>