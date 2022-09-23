<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hdmi-port" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 7H3C1.9 7 1 7.9 1 9V14C1 15.1 1.9 16 3 16H4L5.4 17.4C5.8 17.8 6.3 18 6.8 18H17.1C17.6 18 18.1 17.8 18.5 17.4L20 16H21C22.1 16 23 15.1 23 14V9C23 7.9 22.1 7 21 7M3 14V9H21V14H19.2L17.2 16H6.8L4.8 14H3M19 11H5V13H19V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHdmiPort.svg',
  mixins: [icon]
};
</script>