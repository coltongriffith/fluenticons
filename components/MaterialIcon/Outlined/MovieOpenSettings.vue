<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-movie-open-settings-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.65 4.5L16.91 .96L20.84 .18L21.62 4.1L19.65 4.5M16.71 5.07L13.97 1.54L12 1.93L14.75 5.46L16.71 5.07M11.81 6.05L9.07 2.5L7.1 2.91L9.85 6.44L11.81 6.05M4.16 3.5L3.18 3.69C2.1 3.9 1.39 4.96 1.61 6.04L2 8L6.9 7.03L4.16 3.5M22 8V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V8H22M20 10H4V18H20V10M7 24H9V22H7V24M15 24H17V22H15V24M11 24H13V22H11V24Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedMovieOpenSettings',
  mixins: [icon]
};
</script>