<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-watch-import" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,11H7L4.5,8.5L5.92,7.08L10.84,12L5.92,16.92L4.5,15.5L7,13H2V11M12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6C10.6,6 9.31,6.5 8.29,7.29L6.87,5.87L7.05,5.73L8,0H16L16.95,5.73C18.81,7.19 20,9.45 20,12C20,14.54 18.81,16.81 16.95,18.27L16,24H8L7.05,18.27L6.87,18.13L8.29,16.71C9.31,17.5 10.6,18 12,18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWatchImport.svg',
  mixins: [icon]
};
</script>