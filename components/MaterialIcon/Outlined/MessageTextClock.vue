<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-message-text-clock-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 12.41V4C22 2.9 21.11 2 20 2H4C2.9 2 2 2.89 2 4V22L6 18H9.29C10.15 20.89 12.83 23 16 23C19.86 23 23 19.87 23 16C23 14.69 22.63 13.46 22 12.41M5.17 16L4 17.17V4H20V10.26C18.86 9.47 17.5 9 16 9C14.1 9 12.37 9.77 11.11 11H6V13H9.69C9.25 13.91 9 14.93 9 16H5.17M16 20.85C13.32 20.85 11.15 18.68 11.15 16S13.32 11.15 16 11.15C18.67 11.15 20.85 13.32 20.85 16S18.67 20.85 16 20.85M18 9H6V7H18V9M16.5 15.82L18.94 17.23L18.19 18.53L15 16.69V13H16.5V15.82Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedMessageTextClock',
  mixins: [icon]
};
</script>