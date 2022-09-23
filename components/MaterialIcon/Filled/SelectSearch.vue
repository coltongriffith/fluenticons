<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-select-search" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12S11 14 11 16.5 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9M15.5 19C14.12 19 13 17.88 13 16.5S14.12 14 15.5 14 18 15.12 18 16.5 16.88 19 15.5 19M21 9H19V7H21V9M21 5H19V3H20C20.55 3 21 3.45 21 4V5M19 11.03V11H21V13H20.97C20.46 12.21 19.79 11.54 19 11.03M17 5H15V3H17V5M13 5H11V3H13V5M3 7H5V9H3V7M7 19H9V21H7V19M3 11H5V13H3V11M4 3H5V5H3V4C3 3.45 3.45 3 4 3M9 5H7V3H9V5M3 19H5V21H4C3.45 21 3 20.55 3 20V19M3 15H5V17H3V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSelectSearch.svg',
  mixins: [icon]
};
</script>