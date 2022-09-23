<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-ice-pop" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.15 14.96L9.95 18.65L5.85 9.65C7.21 9.13 8.12 7.82 8.15 6.36C8.14 5 7.36 3.76 6.15 3.15C6.54 2.8 7 2.5 7.45 2.25C9.71 1.25 12.37 2.23 13.45 4.46M13.15 18.36L14.75 21.86L17.45 20.65L15.85 17.15" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledIcePop.svg',
  mixins: [icon]
};
</script>