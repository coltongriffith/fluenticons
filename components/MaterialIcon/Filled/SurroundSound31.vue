<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-surround-sound-3-1" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14 17H12V15H14V17M20 7V17H18V9H16V7H20M10 15C10 16.1 9.1 17 8 17H4V15H8V13H6V11H8V9H4V7H8C9.1 7 10 7.9 10 9V10.5C10 11.3 9.3 12 8.5 12C9.3 12 10 12.7 10 13.5V15" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSurroundSound31.svg',
  mixins: [icon]
};
</script>