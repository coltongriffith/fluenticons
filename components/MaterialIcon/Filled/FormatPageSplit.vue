<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-format-page-split" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 11V7H13V11H11M13 1V5H11V1H13M11 17V13H13V17H11M9 20H6V4H9V2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H9V20M15 3V8H18V20H15V22H18C19.11 22 20 21.11 20 20V8L15 3M13 19H11V23H13V19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFormatPageSplit.svg',
  mixins: [icon]
};
</script>