<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-watch-export" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,11H19L16.5,8.5L17.92,7.08L22.84,12L17.92,16.92L16.5,15.5L19,13H14V11M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.4,6 14.69,6.5 15.71,7.29L17.13,5.87L16.95,5.73L16,0H8L7.05,5.73C5.19,7.19 4,9.46 4,12C4,14.55 5.19,16.81 7.05,18.27L8,24H16L16.95,18.27L17.13,18.13L15.71,16.71C14.69,17.5 13.4,18 12,18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWatchExport.svg',
  mixins: [icon]
};
</script>