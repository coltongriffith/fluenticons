<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-social-distance-2-meters" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 6C7.1 6 8 5.1 8 4S7.1 2 6 2 4 2.9 4 4 4.9 6 6 6M10 9.43C10 8.62 9.5 7.9 8.78 7.58C7.93 7.21 7 7 6 7S4.07 7.21 3.22 7.58C2.5 7.9 2 8.62 2 9.43V10H10V9.43M18 6C19.1 6 20 5.1 20 4S19.1 2 18 2 16 2.9 16 4 16.9 6 18 6M22 9.43C22 8.62 21.5 7.9 20.78 7.58C19.93 7.21 19 7 18 7S16.07 7.21 15.22 7.58C14.5 7.9 14 8.62 14 9.43V10H22V9.43M19 17V15L5 15V17L2 14L5 11V13L19 13V11L22 14L19 17M9 20.5V21H11V22H8V20.5C8 19.95 8.45 19.5 9 19.5H10V19H8V18H10C10.55 18 11 18.45 11 19V19.5C11 20.05 10.55 20.5 10 20.5H9M16 19V22H15V19H14.5V21H13.5V19H13V22H12V19C12 18.45 12.45 18 13 18H15C15.55 18 16 18.45 16 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSocialDistance2Meters.svg',
  mixins: [icon]
};
</script>