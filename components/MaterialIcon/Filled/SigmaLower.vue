<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sigma-lower" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,12C19,16.42 15.64,20 11.5,20C7.36,20 4,16.42 4,12C4,7.58 7.36,4 11.5,4H20V6H16.46C18,7.47 19,9.61 19,12M11.5,6C8.46,6 6,8.69 6,12C6,15.31 8.46,18 11.5,18C14.54,18 17,15.31 17,12C17,8.69 14.54,6 11.5,6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSigmaLower.svg',
  mixins: [icon]
};
</script>