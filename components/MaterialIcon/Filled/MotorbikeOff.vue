<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-motorbike-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L2.4 1.7L1.1 3L8.1 10H6.5C4 10 2 12 2 14.5S4 19 6.5 19C8.7 19 10.6 17.4 10.9 15.3L12.4 14.4L13 15C13.2 17.1 14.9 18.8 17 19L20.8 22.8L22.1 21.5M8.8 15.3C8.5 16.3 7.5 17 6.4 17C5.1 17 4 15.9 4 14.5S5.1 12 6.5 12C7.6 12 8.5 12.7 8.9 13.8H6V15.3H8.8M11.2 8L9.2 6H13.4L17.4 10H17.5C20 10 22 12 22 14.5C22 15.7 21.5 16.8 20.8 17.6L19.4 16.2C19.8 15.8 20 15.2 20 14.6C20 13.2 18.9 12.1 17.5 12.1C16.9 12.1 16.3 12.3 15.9 12.7L13.2 10H14.6L12.6 8H11.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMotorbikeOff.svg',
  mixins: [icon]
};
</script>