<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-thermometer-bluetooth" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 13V5C11 3.34 9.66 2 8 2S5 3.34 5 5V13C2.79 14.66 2.34 17.79 4 20S8.79 22.66 11 21 13.66 16.21 12 14C11.72 13.62 11.38 13.28 11 13M8 4C8.55 4 9 4.45 9 5V8H7V5C7 4.45 7.45 4 8 4M18 8V11.79L15.71 9.5L15 10.21L17.79 13L15 15.79L15.71 16.5L18 14.21V18H18.5L21.35 15.14L19.21 13L21.35 10.85L18.5 8H18M19 9.91L19.94 10.85L19 11.79V9.91M19 14.21L19.94 15.14L19 16.08V14.21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledThermometerBluetooth.svg',
  mixins: [icon]
};
</script>