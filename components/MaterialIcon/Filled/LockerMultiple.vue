<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-locker-multiple" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,2H21A2,2 0 0,1 23,4V20A2,2 0 0,1 21,22H3A2,2 0 0,1 1,20V4A2,2 0 0,1 3,2M13,4V20H21V4H13M3,4V20H11V4H3M5,13H7V17H5V13M5,6H9V7.5H5V6M5,9H9V10.5H5V9M15,13H17V17H15V13M15,6H19V7.5H15V6M15,9H19V10.5H15V9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLockerMultiple.svg',
  mixins: [icon]
};
</script>