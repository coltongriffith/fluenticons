<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sort-clock-descending-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 7H15L19 3L23 7H20V21H18V7M8 5C4.14 5 1 8.13 1 12C1 15.87 4.13 19 8 19C11.86 19 15 15.87 15 12C15 8.13 11.87 5 8 5M8 7.15C10.67 7.15 12.85 9.32 12.85 12C12.85 14.68 10.68 16.85 8 16.85C5.32 16.85 3.15 14.68 3.15 12C3.15 9.32 5.32 7.15 8 7.15M7 9V12.69L10.19 14.53L10.94 13.23L8.5 11.82V9" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedSortClockDescending',
  mixins: [icon]
};
</script>