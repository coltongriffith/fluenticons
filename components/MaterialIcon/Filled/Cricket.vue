<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cricket" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.34,17.77L15.75,16.36L20,20.58L18.56,22L14.34,17.77M18.5,2A3.5,3.5 0 0,1 22,5.5A3.5,3.5 0 0,1 18.5,9A3.5,3.5 0 0,1 15,5.5A3.5,3.5 0 0,1 18.5,2M2.24,7.11L5.07,4.28C5.46,3.89 6.09,3.89 6.5,4.28L14.97,12.77C15.36,13.16 15.36,13.79 14.97,14.18L12.14,17C11.75,17.4 11.12,17.4 10.72,17L2.24,8.53C1.85,8.13 1.85,7.5 2.24,7.11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCricket.svg',
  mixins: [icon]
};
</script>