<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-arrow-left-right" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H13.81C13.3 21.12 13 20.1 13 19C13 15.69 15.69 13 19 13M13 3.5L18.5 9H13V3.5M20 19.5V18H16V16H20V14.5L23 17L20 19.5M18 20H22V22H18V23.5L15 21L18 18.5V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFileArrowLeftRight.svg',
  mixins: [icon]
};
</script>