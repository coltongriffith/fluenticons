<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cash-sync" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3 6V18H13.32C13.1 17.33 13 16.66 13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3M12 9C10.3 9.03 9 10.3 9 12S10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61C14.85 10.28 13.59 8.97 12 9M19 11L21.25 13.25L19 15.5V14C17.15 14 15.94 15.96 16.76 17.62L15.67 18.71C13.91 16.05 15.81 12.5 19 12.5V11M19 22L16.75 19.75L19 17.5V19C20.85 19 22.06 17.04 21.24 15.38L22.33 14.29C24.09 16.95 22.19 20.5 19 20.5V22" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCashSync.svg',
  mixins: [icon]
};
</script>