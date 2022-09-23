<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-seesaw" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21.68 13.26L22.04 15.23L2.35 18.77L2 16.8L4.95 16.27L4.6 14.3C4.5 13.76 4.86 13.24 5.41 13.14C5.95 13.04 6.47 13.4 6.57 13.95L6.92 15.91L16.76 14.15L16.41 12.18C16.31 11.63 16.67 11.11 17.22 11C17.76 10.92 18.28 11.28 18.38 11.82L18.73 13.79L21.68 13.26M10.06 18.4L8 22H16L13.58 17.77L10.06 18.4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSeesaw.svg',
  mixins: [icon]
};
</script>