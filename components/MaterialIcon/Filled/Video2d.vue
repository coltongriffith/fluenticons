<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-video-2d" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 7H16C17.66 7 19 8.34 19 10V14C19 15.66 17.66 17 16 17H13V7M16 15C16.55 15 17 14.55 17 14V10C17 9.45 16.55 9 16 9H15V15H16M5 7H9C10.11 7 11 7.9 11 9V11C11 12.11 10.11 13 9 13H7V15H11V17H5V13C5 11.9 5.9 11 7 11H9V9H5V7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVideo2d.svg',
  mixins: [icon]
};
</script>