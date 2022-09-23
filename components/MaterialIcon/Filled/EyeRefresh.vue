<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-eye-refresh" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 9C10.3 9 9 10.3 9 12S10.3 15 12 15 15 13.7 15 12 13.7 9 12 9M18 18.5L19.8 16.7C19.3 16.3 18.7 16 18 16C16.6 16 15.5 17.1 15.5 18.5S16.6 21 18 21C18.8 21 19.5 20.6 20 20H21.7C21.1 21.5 19.7 22.5 18 22.5C15.8 22.5 14 20.7 14 18.5S15.8 14.5 18 14.5C19.1 14.5 20.1 14.9 20.8 15.7L22 14.5V18.5H18M12.1 19.5C12.1 19.5 12 19.5 12.1 19.5C7 19.5 2.7 16.4 1 12C2.7 7.6 7 4.5 12 4.5S21.3 7.6 23 12C22.8 12.4 22.6 12.9 22.4 13.3C21.3 12.5 20 12 18.5 12C18 12 17.5 12.1 17 12.2V12C17 9.2 14.8 7 12 7S7 9.2 7 12 9.2 17 12 17H12.2C12.1 17.5 12 18 12 18.5C12 18.8 12 19.2 12.1 19.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEyeRefresh.svg',
  mixins: [icon]
};
</script>