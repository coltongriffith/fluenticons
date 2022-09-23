<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-wrench-clock-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16 8C14.8 8.03 13.67 8.35 12.68 8.89C12.88 8.29 13 7.66 13 7C13 4.03 10.84 1.57 8 1.09V6H6V1.09C3.16 1.57 1 4.03 1 7C1 9.22 2.21 11.15 4 12.19V21C4 21.55 4.45 22 5 22H9C9.55 22 10 21.55 10 21V18.62C11.22 20.65 13.43 22 16 22C19.9 22 23 18.9 23 15S19.9 8 16 8M8 11.04V20H6V11.04L5 10.46C3.77 9.74 3 8.42 3 7C3 6 3.37 5.06 4 4.35V8H10V4.35C10.63 5.06 11 6 11 7C11 8.42 10.23 9.74 9 10.46L8 11.04M16 20C13.2 20 11 17.8 11 15S13.2 10 16 10 21 12.2 21 15 18.8 20 16 20M16.5 15.3L19.4 17L18.6 18.2L15 16V11H16.5V15.3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedWrenchClock',
  mixins: [icon]
};
</script>