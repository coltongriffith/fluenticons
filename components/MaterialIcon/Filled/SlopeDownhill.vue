<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-slope-downhill" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22,19V22H2V13L22,19M19.09,7.5L18.25,10.26L8.13,7.26C8.06,5.66 6.7,4.42 5.1,4.5C3.5,4.57 2.26,5.93 2.34,7.53C2.41,9.13 3.77,10.36 5.37,10.29C6.24,10.25 7.05,9.82 7.57,9.11L17.69,12.11L16.85,14.89L21.67,12.29L19.09,7.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSlopeDownhill.svg',
  mixins: [icon]
};
</script>