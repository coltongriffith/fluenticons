<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-dome-light" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 10C21 14.97 16.97 19 12 19C7.03 19 3 14.97 3 10V9.03C3 8.76 3.11 8.5 3.3 8.3C3.5 8.11 3.76 8 4.03 8H20C20.25 8 20.5 8.11 20.7 8.3C20.89 8.5 21 8.75 21 9V10M5 10C5 13.86 8.14 17 12 17C15.86 17 19 13.86 19 10H5M20 6V7H4V6C4 5.73 4.1 5.5 4.29 5.29C4.5 5.1 4.73 5 5 5H10V3H14V5H19C19.25 5 19.5 5.11 19.7 5.3C19.89 5.5 20 5.75 20 6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDomeLight.svg',
  mixins: [icon]
};
</script>