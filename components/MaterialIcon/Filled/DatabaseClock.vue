<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-database-clock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25M23 16C23 19.87 19.87 23 16 23C13.61 23 11.5 21.8 10.25 20C6.18 19.79 3 18.08 3 16V13C3 14.88 5.58 16.44 9.06 16.88C9.03 16.59 9 16.3 9 16C9 15.62 9.04 15.25 9.1 14.88C5.6 14.45 3 12.88 3 11V8C3 10.09 6.2 11.8 10.27 12C10.87 11.14 11.64 10.44 12.53 9.93C12.04 9.97 11.5 10 11 10C6.58 10 3 8.21 3 6S6.58 2 11 2 19 3.79 19 6C19 7.2 17.93 8.28 16.25 9C17 9.04 17.75 9.19 18.44 9.45C18.79 9 19 8.5 19 8V9.68C21.36 10.81 23 13.21 23 16M21 16C21 13.24 18.76 11 16 11S11 13.24 11 16 13.24 21 16 21 21 18.76 21 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDatabaseClock.svg',
  mixins: [icon]
};
</script>