<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pitchfork" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.9 .9L13.1 3.7C12.3 4.5 12.3 5.7 13.1 6.5L14.5 8L9.2 13.4L7.8 12C7 11.2 5.8 11.2 5 12L1 16L2.4 17.4L6.4 13.4L7.8 14.8L3.8 18.8L5.2 20.2L9.2 16.2L10.6 17.6L9.9 18.4L6.7 21.6L8 23L12 19C12.8 18.2 12.8 17 12 16.2L10.6 14.8L15.9 9.4L17.3 10.8C18.1 11.6 19.3 11.6 20.1 10.8L23 8L15.9 .9M18.7 9.4L14.5 5.2L15.9 3.8L20.1 8L18.7 9.4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPitchfork.svg',
  mixins: [icon]
};
</script>