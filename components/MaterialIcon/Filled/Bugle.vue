<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bugle" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21,6C21,11 12,11 12,11C12,11 6,11 5,11C4,11 3,10 3,10H2V14H3C3,14 4,13 5,13C5.2,13 5.7,13 6.3,13C5.5,13.5 5,14.2 5,15C5,16.8 7.3,18 10.5,18C13.7,18 16,16.8 16,15C16,14.4 15.7,13.8 15.2,13.3C17.8,13.8 21,15 21,18H22V6H21M10.5,16.7C8.2,16.7 6.4,15.9 6.4,15C6.4,14.1 8.2,13.3 10.5,13.3C12.8,13.3 14.6,14.1 14.6,15C14.6,15.9 12.8,16.7 10.5,16.7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBugle.svg',
  mixins: [icon]
};
</script>