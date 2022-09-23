<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-consolidate" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 9H20V4H22V9A2 2 0 0 1 20 11H18V13L15 10L18 7M14 10A2 2 0 1 0 12 12A2 2 0 0 0 14 10M2 11V16H4V11H6V13L9 10L6 7V9H4A2 2 0 0 0 2 11M15 16L12 13L9 16H11V18A2 2 0 0 0 13 20H18V18H13V16" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledConsolidate.svg',
  mixins: [icon]
};
</script>