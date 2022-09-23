<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cloud-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7.73,10L15.73,18H6A4,4 0 0,1 2,14A4,4 0 0,1 6,10M3,5.27L5.75,8C2.56,8.15 0,10.77 0,14A6,6 0 0,0 6,20H17.73L19.73,22L21,20.73L4.27,4M19.35,10.03C18.67,6.59 15.64,4 12,4C10.5,4 9.15,4.43 8,5.17L9.45,6.63C10.21,6.23 11.08,6 12,6A5.5,5.5 0 0,1 17.5,11.5V12H19A3,3 0 0,1 22,15C22,16.13 21.36,17.11 20.44,17.62L21.89,19.07C23.16,18.16 24,16.68 24,15C24,12.36 21.95,10.22 19.35,10.03Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCloudOff',
  mixins: [icon]
};
</script>