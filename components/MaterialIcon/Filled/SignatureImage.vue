<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-signature-image" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22,22H2V20H22V22M6.2,17.3L4.8,15.9L6.2,14.5L5.5,13.8L4.1,15.2L2.7,13.8L2,14.5L3.4,15.9L2,17.3L2.7,18L4.1,16.6L5.5,18L6.2,17.3M20,5H10A2,2 0 0,0 8,7V16A2,2 0 0,0 10,18H20A2,2 0 0,0 22,16V7A2,2 0 0,0 20,5M10,16L12.6,12.7L14.4,14.9L16.8,11.6L20,16H10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSignatureImage.svg',
  mixins: [icon]
};
</script>