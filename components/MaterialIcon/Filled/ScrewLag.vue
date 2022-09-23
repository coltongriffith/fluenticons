<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-screw-lag" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10,19.3L14,16.6V20L12,22L10,20V19.3M14,12.7L10,15.4V17.4L9,18V19L15,15.1V14L14,14.7V12.7M7,2V5H17V2H7M9,6V9L10,9.7V13.4L9,14V15L15,11.1V10L14,10.7C14,10.7 14,10.3 14,9.7L15,9V6H9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledScrewLag.svg',
  mixins: [icon]
};
</script>