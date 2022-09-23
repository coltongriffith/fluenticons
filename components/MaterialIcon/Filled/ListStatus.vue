<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-list-status" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.5 11L13 7.5L14.4 6.1L16.5 8.2L20.7 4L22.1 5.4L16.5 11M11 7H2V9H11V7M21 13.4L19.6 12L17 14.6L14.4 12L13 13.4L15.6 16L13 18.6L14.4 20L17 17.4L19.6 20L21 18.6L18.4 16L21 13.4M11 15H2V17H11V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledListStatus.svg',
  mixins: [icon]
};
</script>