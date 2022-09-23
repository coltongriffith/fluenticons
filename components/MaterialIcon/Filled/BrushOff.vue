<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-brush-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.8 22.7L12.4 14.3L11.8 15L9 12.2L9.7 11.5L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M7 14C5.3 14 4 15.3 4 17C4 18.3 2.8 19 2 19C2.9 20.2 4.5 21 6 21C8.2 21 10 19.2 10 17C10 15.3 8.7 14 7 14M20.7 6C21.1 5.6 21.1 5 20.7 4.6L19.4 3.3C19 2.9 18.4 2.9 18 3.3L12.2 9L15 11.8L20.7 6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBrushOff.svg',
  mixins: [icon]
};
</script>