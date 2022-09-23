<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-movie-open-settings" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.75 5.46L12 1.93L13.97 1.54L16.71 5.07L14.75 5.46M21.62 4.1L20.84 .18L16.91 .96L19.65 4.5L21.62 4.1M11.81 6.05L9.07 2.5L7.1 2.91L9.85 6.44L11.81 6.05M2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8H2M4.16 3.5L3.18 3.69C2.1 3.91 1.4 4.96 1.61 6.04L2 8L6.9 7.03L4.16 3.5M11 24H13V22H11V24M7 24H9V22H7V24M15 24H17V22H15V24Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMovieOpenSettings.svg',
  mixins: [icon]
};
</script>