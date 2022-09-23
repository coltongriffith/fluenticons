<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-battery-lock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.8 16V14.5C19.8 13.1 18.4 12 17 12S14.2 13.1 14.2 14.5V16C13.6 16 13 16.6 13 17.2V20.7C13 21.4 13.6 22 14.2 22H19.7C20.4 22 21 21.4 21 20.8V17.3C21 16.6 20.4 16 19.8 16M18.5 16H15.5V14.5C15.5 13.7 16.2 13.2 17 13.2S18.5 13.7 18.5 14.5V16M11.27 22H5.33C4.6 22 4 21.4 4 20.67V5.33C4 4.6 4.6 4 5.33 4H7V2H13V4H14.67C15.4 4 16 4.6 16 5.33V10.11C13.86 10.55 12.2 12.38 12.2 14.5V14.74C11.5 15.34 11 16.24 11 17.2V20.7C11 21.16 11.1 21.6 11.27 22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBatteryLock.svg',
  mixins: [icon]
};
</script>