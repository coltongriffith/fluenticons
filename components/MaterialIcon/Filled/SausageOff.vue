<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sausage-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.8 22.7L16.3 18.2C14.2 19.9 11.4 21 8.5 21C7.1 21 5.9 20.2 5.3 19L3 20.5V14.5L5.3 16C5.8 14.8 7.1 14 8.5 14C9.5 14 10.5 13.7 11.3 13.2L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M21 8.5C21 7.1 20.2 5.9 19 5.3L20.5 3H14.5L16 5.3C14.8 5.8 14 7.1 14 8.5C14 9.2 13.9 9.8 13.6 10.4L18.7 15.6C20.2 13.6 21 11.1 21 8.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSausageOff.svg',
  mixins: [icon]
};
</script>