<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-video-high-definition" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14 10V14C14 14.3 13.8 14.5 13.5 14.5H12.5V9.5H13.5C13.8 9.5 14 9.7 14 10M17 10.5V7C17 6.4 16.6 6 16 6H4C3.4 6 3 6.4 3 7V17C3 17.6 3.4 18 4 18H16C16.6 18 17 17.6 17 17V13.5L21 17.5V6.5L17 10.5M9.5 16H8V12.8H6V16H4.5V8H6V11.2H8V8H9.5V16M15.5 14.5C15.5 15.3 14.8 16 14 16H11V8H14C14.8 8 15.5 8.7 15.5 9.5V14.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVideoHighDefinition.svg',
  mixins: [icon]
};
</script>