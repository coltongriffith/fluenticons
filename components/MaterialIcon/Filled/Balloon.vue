<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-balloon" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.16,12.74L14,14H12.5C12.35,16.71 12,19.41 11.5,22.08L10.5,21.92C11,19.3 11.34,16.66 11.5,14H10L10.84,12.74C8.64,11.79 7,8.36 7,6A5,5 0 0,1 12,1A5,5 0 0,1 17,6C17,8.36 15.36,11.79 13.16,12.74Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBalloon.svg',
  mixins: [icon]
};
</script>