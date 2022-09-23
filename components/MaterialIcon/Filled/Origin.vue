<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-origin" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,2.13C12,2.23 11.95,2.33 11.89,2.41C11.5,3 11.16,3.64 11.04,4.33L11,4.56L12,4.5A7.5,7.5 0 0,1 19.5,12C19.5,13.62 19,15.11 18.12,16.34C16.73,18.68 14.72,20.65 12.34,21.97C12.25,22 12.12,22 12.06,21.93C12,21.83 12,21.7 12.09,21.61C12.47,21.09 12.73,20.5 12.87,19.85L12.93,19.44L12,19.5A7.5,7.5 0 0,1 4.5,12C4.5,10.39 5,8.89 5.88,7.67C7.26,5.32 9.28,3.34 11.67,2C11.78,1.95 11.94,2 12,2.13M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledOrigin.svg',
  mixins: [icon]
};
</script>