<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-screw-round-top" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.5,17V19L12,22L10.5,19L13.5,17M14.5,6.3L13.5,7V6H10.5V9L9.5,9.7V10.7L14.5,7.4V6.3M14.5,10.3L13.5,11V9L10.5,11V13L9.5,13.7V14.7L14.5,11.4V10.3M14.5,14.3L13.5,15V13L10.5,15V17L9.5,17.7V18.7L14.5,15.4V14.3M7,5H17C17,5 16,2 12,2C8,2 7,5 7,5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledScrewRoundTop.svg',
  mixins: [icon]
};
</script>