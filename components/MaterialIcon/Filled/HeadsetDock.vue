<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-headset-dock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,18H9V6.13C7.27,6.57 6,8.14 6,10V11H8V17H6A2,2 0 0,1 4,15V10A6,6 0 0,1 10,4H11A6,6 0 0,1 17,10V12H18V9H20V12A2,2 0 0,1 18,14H17V15A2,2 0 0,1 15,17H13V11H15V10C15,8.14 13.73,6.57 12,6.13V18H22V20H2V18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHeadsetDock.svg',
  mixins: [icon]
};
</script>