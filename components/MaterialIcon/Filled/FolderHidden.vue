<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-folder-hidden" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 4V8H6V4H9M4 16V13H2V16H4M2 12H4V9H2V12M18 8H22C22 6.89 21.1 6 20 6H18V8M22 13H20V16H22V13M20 9V12H22V9H20M9 20V18H6V20H9M5 18H4V17H2V18C2 19.11 2.9 20 4 20H5V18M20 17V18H18V20H20C21.11 20 22 19.11 22 18V17H20M4 8H5V4H4C2.89 4 2 4.89 2 6V8H4M17 18H14V20H17V18M13 18H10V20H13V18M17 6H14V8H17V6M10 8H13V6H12L10 4V8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFolderHidden.svg',
  mixins: [icon]
};
</script>