<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pipe-wrench" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.17 5.63L14.06 7.78L11.91 5.63L16.17 1.41L19.69 4.92C20.86 6.09 20.86 8 19.69 9.19L16.17 5.63M4.83 12.7L7 14.81L10.5 11.3L8.39 9.19L4.83 12.7M15.47 7.78L19 11.3L17.58 12.7L16.88 12L6.23 22.59L3.42 19.78L11.91 11.3L7.69 7.03L9.8 4.92L14.06 9.19L15.47 7.78Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPipeWrench.svg',
  mixins: [icon]
};
</script>