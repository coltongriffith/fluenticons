<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-silo" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15 7.8C14.6 4.5 11.8 2 8.5 2C6.8 2 5.1 2.7 3.9 3.9S2 6.8 2 8.5V22H15V9.8L18 11.6V22H20V12.8L22 14V12L15 7.8M11 20H6V18H11V20M11 16H6V14H11V16M11 12H6V10H11V12M4.3 7C4.9 5.2 6.6 4 8.5 4S12.1 5.2 12.7 7H4.3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSilo.svg',
  mixins: [icon]
};
</script>