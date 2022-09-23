<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-reflect-vertical" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18,23H6C5.61,23 5.26,22.79 5.09,22.45C4.92,22.11 4.96,21.7 5.19,21.4L11.2,13.38C11.58,12.87 12.42,12.87 12.8,13.38L18.81,21.4C19.04,21.7 19.08,22.11 18.91,22.45C18.74,22.79 18.39,23 18,23M18,1C18.39,1 18.74,1.21 18.91,1.55C19.08,1.89 19.04,2.3 18.81,2.6L12.8,10.62C12.42,11.13 11.58,11.13 11.2,10.62L5.19,2.6C4.96,2.3 4.92,1.89 5.09,1.55C5.26,1.21 5.61,1 6,1H18M8,3L12,8.35L16,3H8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledReflectVertical.svg',
  mixins: [icon]
};
</script>