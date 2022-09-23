<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-text-recognition" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 4C2 2.9 2.9 2 4 2H8V4H4V8H2V4M22 20C22 21.11 21.11 22 20 22H16V20H20V16H22V20M4 22C2.9 22 2 21.11 2 20V16H4V20H8V22H4M20 2C21.11 2 22 2.9 22 4V8H20V4H16V2H20M9 7V9H11V17H13V9H15V7H9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTextRecognition.svg',
  mixins: [icon]
};
</script>