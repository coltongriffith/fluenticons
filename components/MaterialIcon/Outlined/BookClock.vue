<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-book-clock-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 11.26V4C20 2.9 19.11 2 18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H11.11C12.37 23.24 14.09 24 16 24C19.87 24 23 20.87 23 17C23 14.62 21.81 12.53 20 11.26M18 4V10.29C17.37 10.11 16.7 10 16 10C14.93 10 13.91 10.25 13 10.68V4H18M6 4H8V12L10.5 9.75L12.1 11.19C10.23 12.45 9 14.58 9 17C9 18.08 9.25 19.09 9.68 20H6V4M16 22C13.24 22 11 19.76 11 17S13.24 12 16 12 21 14.24 21 17 18.76 22 16 22M16.5 17.25L19.36 18.94L18.61 20.16L15 18V13H16.5V17.25Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedBookClock',
  mixins: [icon]
};
</script>