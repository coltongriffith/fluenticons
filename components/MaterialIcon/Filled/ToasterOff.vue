<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-toaster-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.8 22.7L18.1 20H3V13H2V11H3C3 9.9 3.9 9 5 9H7.1L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M15.3 12.1C15.6 11.5 16.3 11 17 11C18.1 11 19 11.9 19 13C19 13.8 18.6 14.4 17.9 14.7L21 17.8V13H22V11H21C21 9.9 20.1 9 19 9H12.2L15.3 12.1M18 8C17.6 5.8 15.1 4 12 4C10.6 4 9.2 4.4 8.2 5L11.2 8H18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledToasterOff.svg',
  mixins: [icon]
};
</script>