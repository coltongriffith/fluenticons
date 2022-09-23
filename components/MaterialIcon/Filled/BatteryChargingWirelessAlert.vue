<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-battery-charging-wireless-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 4H11V2H5V4H3C2.4 4 2 4.4 2 5V21C2 21.6 2.4 22 3 22H13C13.6 22 14 21.6 14 21V5C14 4.4 13.6 4 13 4M9 18H7V16H9V18M9 14H7V8H9V14M20.1 4.9L18.7 6.3C21.8 9.4 21.8 14.5 18.7 17.6L20.1 19C24 15.2 24 8.8 20.1 4.9M17.2 7.8L15.8 9.2C17.4 10.8 17.4 13.3 15.8 14.9L17.2 16.3C19.6 13.9 19.6 10.1 17.2 7.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBatteryChargingWirelessAlert.svg',
  mixins: [icon]
};
</script>