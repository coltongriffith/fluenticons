<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-glass-mug-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 19.35V19.34L6.66 6L6.07 5.41L2.39 1.73L1.11 3L4.26 6.15C3.5 6.44 3 7.16 3 8V15C3 15.82 3.5 16.5 4.2 16.83L8 18.6V20L7 21V22H20.11L20.84 22.73L22.11 21.46L20 19.35M8 16.39L5 15V8H6.11L8 9.89V16.39M8 4L7 3V2H21V3L20 4V16.8L10.2 7H18V4H10V6.8L8 4.8V4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGlassMugOff.svg',
  mixins: [icon]
};
</script>