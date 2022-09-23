<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-mouse-bluetooth" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,7H20.5L23.35,9.85L21.21,12L23.35,14.14L20.5,17H20V13.21L17.71,15.5L17,14.79L19.79,12L17,9.21L17.71,8.5L20,10.79V7M21,8.91V10.79L21.94,9.85L21,8.91M21,13.21V15.08L21.94,14.14L21,13.21M15,9V10H9V2.07C12.39,2.56 15,5.47 15,9M1,10V9C1,5.47 3.61,2.56 7,2.07V10H1M15,15A7,7 0 0,1 8,22A7,7 0 0,1 1,15V12H15V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMouseBluetooth.svg',
  mixins: [icon]
};
</script>