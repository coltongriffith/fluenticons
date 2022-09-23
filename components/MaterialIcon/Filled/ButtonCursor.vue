<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-button-cursor" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.1 15.3C18 15.4 17.8 15.5 17.7 15.6L15.3 16L17 19.6C17.2 20 17 20.4 16.6 20.6L13.8 21.9C13.7 22 13.6 22 13.5 22C13.2 22 12.9 21.8 12.8 21.6L11.2 18L9.3 19.5C9.2 19.6 9 19.7 8.8 19.7C8.4 19.7 8 19.4 8 18.9V7.5C8 7 8.3 6.7 8.8 6.7C9 6.7 9.2 6.8 9.3 6.9L18 14.3C18.3 14.5 18.4 15 18.1 15.3M6 12H4V4H20V12H18.4L20.6 13.9C21.4 13.6 21.9 12.9 21.9 12V4C21.9 2.9 21 2 19.9 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H6V12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledButtonCursor.svg',
  mixins: [icon]
};
</script>