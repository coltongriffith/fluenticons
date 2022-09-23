<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-watch-export-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,11H19L16.5,8.5L17.92,7.08L22.84,12L17.92,16.92L16.5,15.5L19,13H14V11M8,0H16L16.83,5H17C17.28,5 17.54,5.06 17.78,5.16L15.94,7H7V17H15.94L17.78,18.84C17.54,18.94 17.28,19 17,19H16.83L16,24H8L7.17,19H7A2,2 0 0,1 5,17V7C5,5.89 5.9,5 7,5H7.17L8,0Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWatchExportVariant.svg',
  mixins: [icon]
};
</script>