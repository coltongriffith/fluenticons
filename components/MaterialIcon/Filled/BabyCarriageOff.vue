<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-baby-carriage-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 10C22 5.6 18.4 2 14 2V10H22M14.2 11H22C22 12.8 21.4 14.5 20.3 15.9C21 16.5 21.4 17.4 21.5 18.3L14.2 11M20.8 22.7L22.1 21.4L2.4 1.7L1.1 3L9.1 11H7.4L6.5 9H3V11H5.2C5.2 11 7.1 15.1 7.3 15.4C6.3 15.9 5.6 16.9 5.5 18C5.2 19.9 6.6 21.7 8.5 22C10.4 22.3 12.2 20.9 12.5 19H14.6C14.7 19.4 14.8 19.8 15 20.2C15.9 21.9 18.1 22.5 19.7 21.6L20.8 22.7M10.5 18.5C10.5 19.3 9.8 20 9 20S7.5 19.3 7.5 18.5 8.2 17 9 17 10.5 17.7 10.5 18.5M18.1 20C17.2 20 16.5 19.3 16.5 18.5V18.4L18.1 20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBabyCarriageOff.svg',
  mixins: [icon]
};
</script>