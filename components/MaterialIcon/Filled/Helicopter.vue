<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-helicopter" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,3H17V5H3V3M23,6V10.5L14.75,12.2C14.91,12.6 15,13.04 15,13.5C15,14.9 14.18,16.1 13,16.66V17L13,19H16V21H4A3,3 0 0,1 1,18V17H3V18A1,1 0 0,0 4,19H5V16.74C3.25,16.13 2,14.46 2,12.5C2,10 4,8 6.5,8H9V6H11V8H21V6H23M11,19V17H7V19H11M7.5,10C6.12,10 5,10.9 5,12C5,13.1 6.12,14 7.5,14C8.88,14 10,13.1 10,12C10,10.9 8.88,10 7.5,10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHelicopter.svg',
  mixins: [icon]
};
</script>