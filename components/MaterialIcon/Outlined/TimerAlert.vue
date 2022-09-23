<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-timer-alert-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 8H11V14H9V8M13 1H7V3H13V1M17.03 7.39C18.26 8.93 19 10.88 19 13C19 17.97 15 22 10 22C5.03 22 1 17.97 1 13S5.03 4 10 4C12.12 4 14.07 4.74 15.62 6L17.04 4.56C17.55 5 18 5.46 18.45 5.97L17.03 7.39M17 13C17 9.13 13.87 6 10 6S3 9.13 3 13 6.13 20 10 20 17 16.87 17 13M21 7V13H23V7H21M21 17H23V15H21V17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedTimerAlert',
  mixins: [icon]
};
</script>