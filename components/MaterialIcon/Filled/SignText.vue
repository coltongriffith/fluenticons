<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sign-text" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11,3L12,2L13,3V5H20A1,1 0 0,1 21,6V16A1,1 0 0,1 20,17H13V20A2,2 0 0,1 15,22H9A2,2 0 0,1 11,20V17H4A1,1 0 0,1 3,16V6A1,1 0 0,1 4,5H11V3M6,8V10H18V8H6M6,12V14H13V12H6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSignText.svg',
  mixins: [icon]
};
</script>