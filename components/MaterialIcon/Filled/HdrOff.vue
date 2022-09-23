<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hdr-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.5,15V13H18.6L19.5,15H21L20.1,12.9C20.6,12.7 21,12.1 21,11.5V10.5C21,9.7 20.3,9 19.5,9H16V13.9L17.1,15H17.5M17.5,10.5H19.5V11.5H17.5V10.5M13,10.5V10.9L14.5,12.4V10.5C14.5,9.7 13.8,9 13,9H11.1L12.6,10.5H13M9.5,9.5L2.5,2.5L1.4,3.5L6.9,9H6.5V11H4.5V9H3V15H4.5V12.5H6.5V15H8V10.1L9.5,11.6V15H12.9L20.5,22.6L21.6,21.5L9.5,9.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHdrOff.svg',
  mixins: [icon]
};
</script>