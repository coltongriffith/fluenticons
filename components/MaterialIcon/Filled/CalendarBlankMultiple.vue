<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-blank-multiple" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 17V8H7V17H21M21 3C22.1 3 23 3.9 23 5V17C23 18.1 22.1 19 21 19H7C5.89 19 5 18.1 5 17V5C5 3.9 5.9 3 7 3H8V1H10V3H18V1H20V3H21M3 21H17V23H3C1.89 23 1 22.1 1 21V9H3V21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCalendarBlankMultiple.svg',
  mixins: [icon]
};
</script>