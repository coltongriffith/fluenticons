<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-exponent" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.38,3L17.77,8.75C17.55,9.68 17.27,10.32 17,10.7C16.67,11.18 16.44,11.25 16.19,11.25V12.75C16.94,12.75 17.74,12.35 18.24,11.56C19.87,8.94 22,3 22,3H20.38L18.69,7.05L17,3H15.38M3.42,8.59L2,10L6.79,14.79L2,19.59L3.41,21L8.21,16.21L13,21L14.41,19.59L9.62,14.79L14.41,10L13,8.59L8.21,13.38L3.41,8.59H3.42Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledExponent.svg',
  mixins: [icon]
};
</script>