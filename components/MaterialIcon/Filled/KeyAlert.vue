<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-key-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 6.5C4 4 6 2 8.5 2S13 4 13 6.5C13 8.46 11.75 10.13 10 10.74V15H13V18H10V22H7V10.74C5.25 10.13 4 8.46 4 6.5M7 6.5C7 7.33 7.67 8 8.5 8S10 7.33 10 6.5 9.33 5 8.5 5 7 5.67 7 6.5M18 7H20V13H18M18 17H20V15H18" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledKeyAlert.svg',
  mixins: [icon]
};
</script>