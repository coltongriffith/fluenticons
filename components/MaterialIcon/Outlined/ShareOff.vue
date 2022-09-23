<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-share-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L2.4 1.7L1.1 3L8.9 10.8C5.4 12.9 3.7 16.4 3 20C5.3 16.7 8.6 15.1 13 14.9L14 15.9V19L15.6 17.4L20.8 22.7M8.3 13.8C8.94 13.22 9.65 12.71 10.4 12.3L11.3 13.1M14.2 11L12.5 9.3L14 9V5L21 12L18.1 14.9L16.7 13.5L18.2 12L16 9.8V10.7" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedShareOff',
  mixins: [icon]
};
</script>