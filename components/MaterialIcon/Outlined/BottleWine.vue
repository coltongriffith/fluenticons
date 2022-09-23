<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bottle-wine-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.5 2C11.22 2 11 2.22 11 2.5V7C10.93 7 10.85 7 10.78 7.03C9.82 7.27 9.21 8 8.76 8.89C8.3 9.76 8 10.84 8 12C8.05 15 8 18.03 8 21C8 21.55 8.45 22 9 22C11 22 13 22 15 22C15.55 22 16 21.55 16 21C16.04 18 16 15 16 12C16 10.84 15.74 9.76 15.28 8.88C14.83 8 14.22 7.27 13.26 7.04C13.18 7 13.05 7 13 7V2.5C13 2.22 12.78 2 12.5 2M12 8.85C12.32 8.85 12.63 8.9 12.78 9C12.85 9.03 13.2 9.26 13.5 9.81C13.78 10.37 14 11.17 14 12V20H10V12C10 11.17 10.22 10.37 10.5 9.81C10.8 9.26 11.15 9.03 11.22 9C11.36 8.9 11.68 8.85 12 8.85Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedBottleWine',
  mixins: [icon]
};
</script>