<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-toy-brick-marker-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5 12A3.54 3.54 0 0 0 15 15.5C15 18.1 18.5 22 18.5 22S22 18.1 22 15.5A3.54 3.54 0 0 0 18.5 12M18.5 16.8A1.2 1.2 0 1 1 18.5 14.4A1.29 1.29 0 0 1 19.7 15.6A1.15 1.15 0 0 1 18.5 16.8M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H14.54A15.55 15.55 0 0 1 13.54 18H5V8H19V10A5.11 5.11 0 0 1 21 10.6V6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedToyBrickMarker',
  mixins: [icon]
};
</script>