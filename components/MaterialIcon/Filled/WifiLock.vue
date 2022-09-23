<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-wifi-lock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3S19.79 4.34 22.8 6.6L21 9C18.5 7.12 15.38 6 12 6M17.4 10.29C15.77 9.47 13.94 9 12 9C9.3 9 6.81 9.89 4.8 11.4L6.6 13.8C8.1 12.67 9.97 12 12 12C12.97 12 13.9 12.16 14.78 12.44C15.34 11.45 16.27 10.68 17.4 10.29M8.4 16.2L12 21L13 19.67V17.2C13 16.5 13.27 15.81 13.7 15.26C13.16 15.1 12.59 15 12 15C10.65 15 9.4 15.45 8.4 16.2M23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V14.5C16.2 13.1 17.6 12 19 12S21.8 13.1 21.8 14.5V16C22.4 16 23 16.6 23 17.3M20.5 14.5C20.5 13.7 19.8 13.2 19 13.2S17.5 13.7 17.5 14.5V16H20.5V14.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWifiLock.svg',
  mixins: [icon]
};
</script>