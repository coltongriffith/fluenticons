<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-church" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 12.22V9L13 6.5V5H15V3H13V1H11V3H9V5H11V6.5L6 9V12.22L2 14V22H10V19C10 17.9 10.9 17 12 17S14 17.9 14 19V22H22V14L18 12.22M12 13.5C11.17 13.5 10.5 12.83 10.5 12S11.17 10.5 12 10.5 13.5 11.17 13.5 12 12.83 13.5 12 13.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledChurch.svg',
  mixins: [icon]
};
</script>