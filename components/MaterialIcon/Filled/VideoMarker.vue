<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-video-marker" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5.5 16.8C4.8 16.8 4.3 16.2 4.3 15.6C4.3 14.9 4.9 14.4 5.5 14.4S6.7 15 6.7 15.6C6.8 16.2 6.2 16.8 5.5 16.8M5.5 12C3.6 12 2 13.6 2 15.5C2 18.1 5.5 22 5.5 22S9 18.1 9 15.5C9 13.6 7.4 12 5.5 12M4 6C3.4 6 3 6.4 3 7V10.6C3.8 10.2 4.6 10 5.5 10C8.5 10 11 12.5 11 15.5C11 16.4 10.8 17.2 10.5 18H16C16.6 18 17 17.6 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.4 16.6 6 16 6H4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledVideoMarker',
  mixins: [icon]
};
</script>