<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-flask-empty-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.8 22.7L19.6 21.5C19.1 21.8 18.6 22 18 22H6C4.3 22 3 20.7 3 19C3 18.4 3.2 17.8 3.5 17.4L7.9 9.8L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M15 7.8V6C15.6 6 16 5.6 16 5V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V4.8L20.4 17.2L15 7.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFlaskEmptyOff.svg',
  mixins: [icon]
};
</script>