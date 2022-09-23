<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-timeline-check-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 4H10C8.9 4 8 4.89 8 6V10L6 12L8 14V18C8 19.11 8.9 20 10 20H22C23.11 20 24 19.11 24 18V6C24 4.89 23.11 4 22 4M22 18H10V6H22V18M4 8H2V2H4V8M2 16H4V22H2V16M5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12M15 15.08L12.25 12.08L13.41 10.92L15 12.5L18.59 8.92L19.75 10.33L15 15.08Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedTimelineCheck',
  mixins: [icon]
};
</script>