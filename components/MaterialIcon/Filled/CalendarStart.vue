<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-start" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 14H4V17H9V14L13 18L9 22V19H4V22H2V14M19 19V8H5V12H3L3 5C3 3.89 3.89 3 5 3H6V.998H8V3H16V.998H18V3H19C20.1 3 21 3.89 21 5V19C21 20.1 20.1 21 19 21L12.83 21L14.83 19L19 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCalendarStart.svg',
  mixins: [icon]
};
</script>