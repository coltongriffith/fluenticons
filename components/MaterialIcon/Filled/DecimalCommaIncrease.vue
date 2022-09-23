<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-decimal-comma-increase" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 5A3 3 0 0 0 6 8V11A3 3 0 0 0 12 11V8A3 3 0 0 0 9 5M10 11A1 1 0 0 1 8 11V8A1 1 0 0 1 10 8M16 14A3 3 0 0 0 19 11V8A3 3 0 0 0 13 8V11A3 3 0 0 0 16 14M15 8A1 1 0 0 1 17 8V11A1 1 0 0 1 15 11M19 20V18H13V16H19V14L22 17M5 13V16H4L3 13A1 1 0 0 1 5 13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDecimalCommaIncrease.svg',
  mixins: [icon]
};
</script>