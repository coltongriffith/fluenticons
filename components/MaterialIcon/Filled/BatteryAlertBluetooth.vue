<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-battery-alert-bluetooth" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5 2V4H3.3C2.6 4 2 4.6 2 5.3V20.6C2 21.4 2.6 22 3.3 22H12.6C13.3 22 13.9 21.4 13.9 20.7V5.3C14 4.6 13.4 4 12.7 4H11V2H5M19 8V11.8L16.7 9.5L16 10.2L18.8 13L16 15.8L16.7 16.5L19 14.2V18H19.5L22.4 15.1L20.2 13L22.3 10.9L19.5 8H19M7 8H9V14H7M20 9.9L20.9 10.8L20 11.8V9.9M20 14.2L20.9 15.1L20 16.1V14.2M7 16H9V18H7V16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBatteryAlertBluetooth.svg',
  mixins: [icon]
};
</script>