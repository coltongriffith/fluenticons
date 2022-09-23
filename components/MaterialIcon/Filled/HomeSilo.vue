<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-home-silo" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M24 7.8C23.6 4.5 20.9 2 17.5 2C15.8 2 14.1 2.7 12.9 3.9C12.2 4.6 11.7 5.3 11.4 6.2L17 9.9V10H20V12H17V14H20V16H17V18H20V20H17V22H24V7.8M13.3 7C13.9 5.2 15.6 4 17.5 4S21.1 5.2 21.7 7H13.3M0 11V22H5V15H10V22H15V11L7.5 6L0 11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHomeSilo.svg',
  mixins: [icon]
};
</script>