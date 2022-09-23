<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-home-heart" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,12L12,3L22,12H19V20H5V12H2M12,18L12.72,17.34C15.3,15 17,13.46 17,11.57C17,10.03 15.79,8.82 14.25,8.82C13.38,8.82 12.55,9.23 12,9.87C11.45,9.23 10.62,8.82 9.75,8.82C8.21,8.82 7,10.03 7,11.57C7,13.46 8.7,15 11.28,17.34L12,18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHomeHeart.svg',
  mixins: [icon]
};
</script>