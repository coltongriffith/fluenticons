<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-multicast" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17 2V4H12C10.9 4 10 4.89 10 6V9H12V6H17V8L20 5L17 2M17 9V11H6.73C6.37 10.38 5.71 10 5 10C3.9 10 3 10.9 3 12S3.9 14 5 14C5.71 14 6.37 13.62 6.73 13H17V15L20 12L17 9M10 15V18C10 19.11 10.9 20 12 20H17V22L20 19L17 16V18H12V15H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMulticast.svg',
  mixins: [icon]
};
</script>