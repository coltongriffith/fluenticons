<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fridge-alert-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7 21V22H5V21C3.9 21 3 20.11 3 19V4C3 2.9 3.9 2 5 2H15C16.11 2 17 2.9 17 4V19C17 20.11 16.11 21 15 21V22H13V21H7M5 4V9H15V4H5M5 19H15V11H5V19M6 12H8V15H6V12M6 6H8V8H6V6M19 15H21V17H19V15M19 7H21V13H19V7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFridgeAlert',
  mixins: [icon]
};
</script>