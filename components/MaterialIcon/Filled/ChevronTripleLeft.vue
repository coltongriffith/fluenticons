<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-chevron-triple-left" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.42,7.41L4.83,12L9.42,16.59L8,18L2,12L8,6L9.42,7.41M15.42,7.41L10.83,12L15.42,16.59L14,18L8,12L14,6L15.42,7.41M21.42,7.41L16.83,12L21.42,16.59L20,18L14,12L20,6L21.42,7.41Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledChevronTripleLeft.svg',
  mixins: [icon]
};
</script>