<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-escalator-up" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 8H18.95L6.95 20H4C2.9 20 2 19.11 2 18C2 16.9 2.9 16 4 16H5.29L7 14.29V10C7 9.45 7.45 9 8 9H9C9.55 9 10 9.45 10 10V11.29L17.29 4H20C21.11 4 22 4.89 22 6C22 7.11 21.11 8 20 8M8.5 5C9.33 5 10 5.67 10 6.5C10 7.33 9.33 8 8.5 8C7.67 8 7 7.33 7 6.5C7 5.67 7.67 5 8.5 5M20.17 15.66L14.66 21.17L12.83 19.34L18.34 13.83L16.5 12H22V17.5L20.17 15.66Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEscalatorUp.svg',
  mixins: [icon]
};
</script>