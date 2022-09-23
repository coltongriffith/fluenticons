<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-engine-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.5,3.77L6.87,8.14L5,10V13H3V10H1V18H3V15H5V18H8L10,20H18V19.27L21.23,22.5L22.5,21.22L3.78,2.5L2.5,3.77M16,18H11L9,16H7V11L8,10H8.73L16,17.27V18M23,9V19H22.82L16,12.18V10H13.82L7.82,4H15V6H12V8H18V12H20V9H23Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedEngineOff',
  mixins: [icon]
};
</script>