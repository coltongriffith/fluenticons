<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-briefcase-variant-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10 6.8L8.1 4.9L10 3H14L16 5V7H20C21.1 7 22 7.9 22 9V12C22 13.1 21.1 14 20 14H17.2L10.2 7H14V5H10V6.8M2.39 1.73L1.11 3L5.11 7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H10.11L14 15.89V16H10V15H3V19C3 20.11 3.89 21 5 21H19C19.03 21 19.07 21 19.1 21L20.84 22.73L22.11 21.46L2.39 1.73M21 17.8V15H18.2L21 17.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBriefcaseVariantOff.svg',
  mixins: [icon]
};
</script>