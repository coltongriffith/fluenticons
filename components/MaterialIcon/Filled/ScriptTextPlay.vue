<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-script-text-play" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.8 22H5C3.3 22 2 20.7 2 19V18H13.1C13 18.3 13 18.7 13 19C13 20.1 13.3 21.1 13.8 22M13.8 16H5V5C5 3.3 6.3 2 8 2H19C20.7 2 22 3.3 22 5V6H20V5C20 4.4 19.6 4 19 4S18 4.4 18 5V13.1C16.2 13.4 14.7 14.5 13.8 16M8 8H15V6H8V8M8 12H14V10H8V12M17 16V22L22 19L17 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledScriptTextPlay.svg',
  mixins: [icon]
};
</script>