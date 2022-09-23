<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-exponent-box" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M13.76,6H15.39L16.5,8.6L17.59,6H19.24C19.24,6 17.5,10.57 16.46,12.32C16.08,12.89 15.35,13.27 14.5,13.25V11.75C14.96,11.76 15.25,11.5 15.5,11.13C15.61,11 15.68,10.8 15.74,10.64L13.76,6M6.41,9.59L9.21,12.38L12,9.59L13.41,11L10.62,13.79L13.41,16.59L12,18L9.21,15.21L6.41,18L5,16.59L7.79,13.79L5,11L6.41,9.59Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledExponentBox.svg',
  mixins: [icon]
};
</script>