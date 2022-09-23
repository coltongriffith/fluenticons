<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-email-open-multiple-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 8V22H20V24H2C.895 24 0 23.11 0 22V8H2M23.03 6.29L14 .64L4.97 6.29C4.39 6.64 4 7.27 4 8V18C4 19.1 4.9 20 6 20H22C23.1 20 24 19.1 24 18V8C24 7.27 23.61 6.64 23.03 6.29M22 18H6V10L14 15L22 10V18M14 13L6 8L14 3L22 8L14 13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedEmailOpenMultiple',
  mixins: [icon]
};
</script>