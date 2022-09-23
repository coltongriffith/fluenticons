<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-wall-sconce-round-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 19V16H11V19H13M19.09 16.5L20.5 15.09L18.73 13.32L17.32 14.73L19.09 16.5M4.91 16.5L6.68 14.73L5.27 13.32L3.5 15.09L4.91 16.5M12 6C13.04 6 14.08 6.28 15 6.81C16.26 7.5 17.19 8.67 17.66 10H6.34C6.81 8.67 7.74 7.5 9 6.81C9.92 6.28 10.96 6 12 6M12 4C10.63 4 9.25 4.36 8 5.07C5.5 6.5 4 9.14 4 12H20C20 9.14 18.5 6.5 16 5.07C14.75 4.36 13.38 4 12 4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedWallSconceRound',
  mixins: [icon]
};
</script>