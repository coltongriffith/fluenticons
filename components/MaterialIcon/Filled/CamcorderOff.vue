<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-camcorder-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L9.4 8.8L2.4 1.8L1.1 3L2.7 4.6C2.2 5.3 2 6.1 2 7V20C2 21.1 2.9 22 4 22H10C11.1 22 12 21.1 12 20V13.9L13 14.9V16H14.1L20.8 22.7L22.1 21.5M5 20C4.5 20 4 19.5 4 19S4.5 18 5 18 6 18.5 6 19 5.5 20 5 20M7 10C5.3 10 4 8.7 4 7C4 6.7 4.1 6.4 4.2 6.1L8 9.9C7.6 9.9 7.3 10 7 10M7.2 4L5.5 2.3C6 2.1 6.5 2 7 2C9.8 2 12 4.2 12 7V8.8L10 6.8C9.9 5.3 8.7 4.1 7.2 4M20 9H13V7H20C21.1 7 22 7.9 22 9V14C22 15.1 21.1 16 20 16H19.2L17.2 14H20V9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCamcorderOff.svg',
  mixins: [icon]
};
</script>