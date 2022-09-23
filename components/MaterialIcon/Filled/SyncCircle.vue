<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sync-circle" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12M15.6 13.72A4 4 0 0 0 16 12A4 4 0 0 0 12 8V10L8.88 7L12 4V6A6 6 0 0 1 18 12A5.9 5.9 0 0 1 17.07 15.19M6 12A5.9 5.9 0 0 1 6.93 8.81L8.4 10.28A4 4 0 0 0 8 12A4 4 0 0 0 12 16V14L15 17L12 20V18A6 6 0 0 1 6 12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSyncCircle.svg',
  mixins: [icon]
};
</script>