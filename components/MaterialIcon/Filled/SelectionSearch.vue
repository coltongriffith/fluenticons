<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-selection-search" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.27 18.9C19.7 18.21 19.95 17.38 19.95 16.5C19.95 14 17.95 12 15.46 12S10.96 14 10.96 16.5 12.96 21 15.46 21C16.33 21 17.15 20.75 17.84 20.32L20.96 23.39L22.35 22L19.27 18.9M15.46 19C14.07 19 12.96 17.88 12.96 16.5S14.07 14 15.46 14 17.95 15.12 17.95 16.5 16.84 19 15.46 19M22 14H21.45C21.12 13.19 20.62 12.47 20 11.86V10H22V14M20 4H17V2H20C21.11 2 22 2.9 22 4V7H20V4M14 4H10V2H14V4M4 2H7V4H4V7H2V4C2 2.89 2.9 2 4 2M12 22H10V20C10.5 20.82 11.2 21.5 12 22M4 20H7V22H4C2.9 22 2 21.11 2 20V17H4V20M4 14H2V10H4V14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSelectionSearch.svg',
  mixins: [icon]
};
</script>