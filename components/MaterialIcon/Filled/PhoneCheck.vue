<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-phone-check" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6.62 10.79A15.1 15.1 0 0 0 13.21 17.38L15.41 15.18A1 1 0 0 1 16.41 14.93A11.36 11.36 0 0 0 20 15.5A1 1 0 0 1 21 16.5V20A1 1 0 0 1 20 21A17 17 0 0 1 3 4A1 1 0 0 1 4 3H7.5A1 1 0 0 1 8.5 4A11.36 11.36 0 0 0 9.07 7.57A1 1 0 0 1 8.82 8.57M21.71 4.71L20.29 3.29L15 8.59L12.71 6.29L11.29 7.71L15 11.41Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPhoneCheck.svg',
  mixins: [icon]
};
</script>