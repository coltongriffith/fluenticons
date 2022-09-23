<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-faucet-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 21H3C3 19.9 3.9 19 5 19H19C20.11 19 21 19.89 21 21M19 7C19 5.39 17.93 3 15 3S11 5.39 11 7V18H13V7C13 6.54 13.17 5 15 5S17 6.54 17 7H16.5V9H19.5V7H19M7 12C6.45 12 6 12.45 6 13V14H3V15H6V18H8V13C8 12.45 7.55 12 7 12M21 14H18V13C18 12.45 17.55 12 17 12S16 12.45 16 13V18H18V15H21V14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFaucetVariant.svg',
  mixins: [icon]
};
</script>