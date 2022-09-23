<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sack-percent" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8,7L6,2L10,4L12,2L14,4L18,2L16,7H8M16,22C10,22 8,22 8,22C2,22 3,18 3,18C3,18 4,11 8,9H16C20,11 21,18 21,18C21,18 22,22 16,22M7.5,12.5A1.5,1.5 0 0,0 9,14A1.5,1.5 0 0,0 10.5,12.5A1.5,1.5 0 0,0 9,11A1.5,1.5 0 0,0 7.5,12.5M16.5,18.5A1.5,1.5 0 0,0 15,17A1.5,1.5 0 0,0 13.5,18.5A1.5,1.5 0 0,0 15,20A1.5,1.5 0 0,0 16.5,18.5M16.5,12.35L15.15,11L7.5,18.65L8.87,20L16.5,12.35Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSackPercent.svg',
  mixins: [icon]
};
</script>