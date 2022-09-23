<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-wiper" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,4C5,4 2,9 2,9L9,16C9,16 9.5,15.1 10.4,14.5L10.7,16.5C10.3,16.8 10,17.4 10,18A2,2 0 0,0 12,20A2,2 0 0,0 14,18C14,17.1 13.5,16.4 12.7,16.1L12.3,14C14.1,14.2 15,16 15,16L22,9C22,9 19,4 12,4M15.1,13.1C14.3,12.5 13.3,12 12,12L11,6.1C11.3,6 11.7,6 12,6C15.7,6 18.1,7.7 19.3,8.9L15.1,13.1M8.9,13.1L4.7,8.9C5.5,8 7,7 9,6.4L10,12.4C9.6,12.6 9.2,12.8 8.9,13.1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWiper.svg',
  mixins: [icon]
};
</script>