<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-wifi-settings" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 20L8.4 15.2C9.4 14.45 10.65 14 12 14S14.6 14.45 15.6 15.2L12 20M4.8 10.4L6.6 12.8C8.1 11.67 9.97 11 12 11S15.9 11.67 17.4 12.8L19.2 10.4C17.19 8.89 14.7 8 12 8S6.81 8.89 4.8 10.4M12 2C7.95 2 4.21 3.34 1.2 5.6L3 8C5.5 6.12 8.62 5 12 5S18.5 6.12 21 8L22.8 5.6C19.79 3.34 16.05 2 12 2M7 24H9V22H7V24M15 24H17V22H15V24M11 24H13V22H11V24Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWifiSettings.svg',
  mixins: [icon]
};
</script>