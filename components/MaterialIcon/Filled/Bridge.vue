<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bridge" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7,14V10.91C6.28,10.58 5.61,10.18 5,9.71V14H7M5,18H3V16H1V14H3V7H5V8.43C6.8,10 9.27,11 12,11C14.73,11 17.2,10 19,8.43V7H21V14H23V16H21V18H19V16H5V18M17,10.91V14H19V9.71C18.39,10.18 17.72,10.58 17,10.91M16,14V11.32C15.36,11.55 14.69,11.72 14,11.84V14H16M13,14V11.96L12,12L11,11.96V14H13M10,14V11.84C9.31,11.72 8.64,11.55 8,11.32V14H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBridge.svg',
  mixins: [icon]
};
</script>