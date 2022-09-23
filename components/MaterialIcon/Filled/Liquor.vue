<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-liquor" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3 14C3 15.3 3.8 16.4 5 16.8V20H3V22H9V20H7V16.8C8.2 16.4 9 15.3 9 14V6H3V14M5 8H7V11H5V8M20.6 8.5L19.6 8.2C19.3 8.1 19 7.7 19 7.3V3C19 2.5 18.5 2 18 2H15C14.4 2 14 2.5 14 3V7.3C14 7.7 13.7 8.1 13.3 8.3L12.4 8.6C11.6 8.9 11 9.6 11 10.5V20C11 21.1 11.9 22 13 22H20C21.1 22 22 21.1 22 20V10.4C22 9.6 21.5 8.8 20.6 8.5M16 4H17V5H16V4M13 10.4L13.9 10.1C15.2 9.7 16 8.6 16 7.3V7H17V7.3C17 8.6 17.8 9.7 19 10.1L20 10.4V12H13V10.4M20 20H13V18H20V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLiquor.svg',
  mixins: [icon]
};
</script>