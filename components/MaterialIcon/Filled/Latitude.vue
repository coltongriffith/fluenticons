<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-latitude" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 4C15 4 17.5 5.6 18.9 8H5.1C6.5 5.6 9 4 12 4M12 20C9 20 6.5 18.4 5.1 16H18.9C17.5 18.4 15 20 12 20M4.3 14C4.1 13.4 4 12.7 4 12S4.1 10.6 4.3 10H19.8C20 10.6 20.1 11.3 20.1 12S20 13.4 19.8 14H4.3Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLatitude.svg',
  mixins: [icon]
};
</script>