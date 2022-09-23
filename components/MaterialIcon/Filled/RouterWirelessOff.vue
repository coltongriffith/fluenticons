<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-router-wireless-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.8 5.9L11 5.1C12.4 3.7 14.2 3 16 3S19.6 3.7 21 5.1L20.2 5.9C19 4.8 17.5 4.2 16 4.2S13 4.8 11.8 5.9M21 15C21 13.9 20.1 13 19 13H17V9H15V11.8L21 17.8V15M18.5 7.5L19.3 6.7C18.4 5.8 17.2 5.3 16 5.3S13.6 5.8 12.7 6.7L13.5 7.5C14.2 6.8 15.1 6.5 16 6.5C16.9 6.5 17.8 6.8 18.5 7.5M22.1 21.5L20.8 22.8L19.1 21H5C3.9 21 3 20.1 3 19V15C3 13.9 3.9 13 5 13H11.1L1.1 3L2.4 1.7L22.1 21.5M8 16H6V18H8V16M11.5 16H9.5V18H11.5V16M15 16.9L14.1 16H13V18H15V16.9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRouterWirelessOff.svg',
  mixins: [icon]
};
</script>