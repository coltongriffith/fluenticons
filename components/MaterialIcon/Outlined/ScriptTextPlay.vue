<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-script-text-play-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 14H14V15.7C13.9 15.8 13.9 15.9 13.8 16H9V14M9 12H14V10H9V12M9 8H14V6H9V8M7 5C7 4.4 7.4 4 8 4H16V13.8C16.6 13.4 17.3 13.2 18 13.1V5C18 4.4 18.4 4 19 4S20 4.4 20 5V6H22V5C22 3.3 20.7 2 19 2H8C6.3 2 5 3.3 5 5V16H7V5M13 19V18.4 18H2V19C2 20.7 3.3 22 5 22H13.8C13.3 21.1 13 20.1 13 19M17 16V22L22 19L17 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedScriptTextPlay',
  mixins: [icon]
};
</script>