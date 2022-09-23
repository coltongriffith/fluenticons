<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-briefcase-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.11 21.46L20.84 22.73L19.11 21H4C2.89 21 2 20.1 2 19V8C2 6.89 2.89 6 4 6H4.11L1.11 3L2.39 1.73L22.11 21.46M22 18.8L8 4.8V4C8 2.89 8.89 2 10 2H14C15.11 2 16 2.9 16 4V6H20C21.11 6 22 6.9 22 8V18.8M14 4H10V6H14V4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBriefcaseOff.svg',
  mixins: [icon]
};
</script>