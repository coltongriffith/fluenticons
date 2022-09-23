<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-glass-fragile" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 20H18V22H6V20H11V13.97C8.19 13.7 6 11.34 6 8.46C6 8.15 6.03 7.85 6.08 7.55L7 2H13.54L12.33 4.41L11.79 5.5H13.79L12.33 8.41L11.79 9.5H14L13 12.75L15.67 9.09L16.46 8H14.21L15.67 5.09L16.21 4H14.21L15.21 2H17L17.93 7.55C18 7.85 18 8.15 18 8.46C18 11.34 15.81 13.7 13 13.97V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGlassFragile.svg',
  mixins: [icon]
};
</script>