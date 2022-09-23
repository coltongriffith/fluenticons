<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-document-multiple" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4M15 7H20.5L15 1.5V7M8 0H16L22 6V18C22 19.11 21.11 20 20 20H8C6.89 20 6 19.1 6 18V2C6 .89 6.89 0 8 0M17 16V14H8V16H17M20 12V10H8V12H20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFileDocumentMultiple.svg',
  mixins: [icon]
};
</script>