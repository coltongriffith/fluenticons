<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-chili-mild-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10.25 7.5L8.73 6.63C9.26 5.7 10.03 5 10.94 4.69C10.8 4.29 10.44 4 10 4V2C11.54 2 12.79 3.16 12.97 4.65C13.91 4.94 14.72 5.66 15.27 6.63L13.75 7.5L12 6.5L10.25 7.5M16 10V22C16 22 8 20 8 11V10C8 9.27 8.4 8.63 9 8.28L10.25 9L12 8L13.75 9L15 8.28C15.6 8.63 16 9.27 16 10M14 11.45L12 10.3L10 11.43C10.17 15.44 12.23 17.69 14 18.87V11.45Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedChiliMild',
  mixins: [icon]
};
</script>