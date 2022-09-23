<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sprinkler-fire" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5 21V23H7V21H5M11 21H9V23H11V21M7 18V20H9V18H7M11 15V17H9V15H11M15 21H13V23H15V21M11 18V20H13V18H11M15 15V17H13V15H15M19 21H17V23H19V21M15 18V20H17V18H15M16 11V13H8V11H11V5H13V11H16M21 1V3H18V6L14 10V7.2L16 5.2V3H8V5.2L10 7.2V10L6 6V3H3V1H21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSprinklerFire.svg',
  mixins: [icon]
};
</script>