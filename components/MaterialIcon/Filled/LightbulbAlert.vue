<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-lightbulb-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10 2C6.1 2 3 5.1 3 9C3 11.4 4.2 13.5 6 14.7V17C6 17.6 6.4 18 7 18H13C13.6 18 14 17.6 14 17V14.7C15.8 13.4 17 11.3 17 9C17 5.1 13.9 2 10 2M7 21C7 21.6 7.4 22 8 22H12C12.6 22 13 21.6 13 21V20H7V21M19 12V7H21V13H19M19 17V15H21V17H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLightbulbAlert.svg',
  mixins: [icon]
};
</script>