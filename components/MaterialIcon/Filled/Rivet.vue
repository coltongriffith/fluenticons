<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-rivet" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.43,2C10.61,2 9.94,2.65 9.94,3.5C9.94,4.64 9.94,5.8 9.94,6.96H7.95V7.95H15.91V6.96H13.92C13.92,5.8 13.92,4.64 13.92,3.5C13.92,2.65 13.25,2 12.43,2H11.43M10.94,8.95V21.87L11.93,22.87L12.92,21.87V8.95H10.94Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRivet.svg',
  mixins: [icon]
};
</script>