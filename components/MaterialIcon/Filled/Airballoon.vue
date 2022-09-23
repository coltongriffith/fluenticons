<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-airballoon" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11,23A2,2 0 0,1 9,21V19H15V21A2,2 0 0,1 13,23H11M12,1C12.71,1 13.39,1.09 14.05,1.26C15.22,2.83 16,5.71 16,9C16,11.28 15.62,13.37 15,16A2,2 0 0,1 13,18H11A2,2 0 0,1 9,16C8.38,13.37 8,11.28 8,9C8,5.71 8.78,2.83 9.95,1.26C10.61,1.09 11.29,1 12,1M20,8C20,11.18 18.15,15.92 15.46,17.21C16.41,15.39 17,11.83 17,9C17,6.17 16.41,3.61 15.46,1.79C18.15,3.08 20,4.82 20,8M4,8C4,4.82 5.85,3.08 8.54,1.79C7.59,3.61 7,6.17 7,9C7,11.83 7.59,15.39 8.54,17.21C5.85,15.92 4,11.18 4,8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAirballoon.svg',
  mixins: [icon]
};
</script>