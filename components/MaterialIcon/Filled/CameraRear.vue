<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-camera-rear" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,6C10.89,6 10,5.1 10,4A2,2 0 0,1 12,2C13.09,2 14,2.9 14,4A2,2 0 0,1 12,6M17,0H7A2,2 0 0,0 5,2V16A2,2 0 0,0 7,18H17A2,2 0 0,0 19,16V2A2,2 0 0,0 17,0M14,20V22H19V20M10,20H5V22H10V24L13,21L10,18V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCameraRear.svg',
  mixins: [icon]
};
</script>