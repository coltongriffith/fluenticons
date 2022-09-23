<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-transmission-tower-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L2.4 1.7L1.1 3L6.1 8H5.4L4.1 10.5L5.9 11.4L6.6 10H8.1L9.1 11L6.2 22H8.3L8.5 21.1L12 15.9L15.5 21.1L15.7 22H17.8L17 18.8L20.9 22.7L22.1 21.5M9.3 18.1L10.5 13.6L11.4 14.9L9.3 18.1M14.7 18.1L12.6 15L12.8 14.7L14.1 16L14.7 18.1M14.2 11H14.9L15.1 11.9L14.2 11M14.1 8H18.6L19.9 10.6L18.1 11.5L17.4 10H13.2L10.2 7L10.7 5H13.3L14.1 8M8.4 5.2L6.9 3.7L7.8 2H16.3L17.6 4.5L15.8 5.4L15 4H9L8.4 5.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTransmissionTowerOff.svg',
  mixins: [icon]
};
</script>