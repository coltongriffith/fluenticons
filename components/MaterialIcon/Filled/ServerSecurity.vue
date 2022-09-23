<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-server-security" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,1H19A1,1 0 0,1 20,2V6A1,1 0 0,1 19,7H3A1,1 0 0,1 2,6V2A1,1 0 0,1 3,1M3,9H19A1,1 0 0,1 20,10V10.67L17.5,9.56L11,12.44V15H3A1,1 0 0,1 2,14V10A1,1 0 0,1 3,9M3,17H11C11.06,19.25 12,21.4 13.46,23H3A1,1 0 0,1 2,22V18A1,1 0 0,1 3,17M8,5H9V3H8V5M8,13H9V11H8V13M8,21H9V19H8V21M4,3V5H6V3H4M4,11V13H6V11H4M4,19V21H6V19H4M17.5,12L22,14V17C22,19.78 20.08,22.37 17.5,23C14.92,22.37 13,19.78 13,17V14L17.5,12M17.5,13.94L15,15.06V17.72C15,19.26 16.07,20.7 17.5,21.06V13.94Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledServerSecurity.svg',
  mixins: [icon]
};
</script>