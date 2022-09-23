<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-key" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 16C11 16.6 10.6 17 10 17S9 16.6 9 16C9 15.4 9.4 15 10 15S11 15.4 11 16M20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H14M18 15H12.8C12.2 13.4 10.5 12.6 9 13.2C7.4 13.8 6.6 15.5 7.2 17S9.5 19.4 11 18.8C11.9 18.5 12.5 17.8 12.8 17H14V19H16V17H18M18.5 9L13 3.5V9H18.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFileKey.svg',
  mixins: [icon]
};
</script>