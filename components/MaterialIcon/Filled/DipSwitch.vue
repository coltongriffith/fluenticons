<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-dip-switch" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,4H7A1,1 0 0,1 8,5V19A1,1 0 0,1 7,20H3A1,1 0 0,1 2,19V5A1,1 0 0,1 3,4M10,4H14A1,1 0 0,1 15,5V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V5A1,1 0 0,1 10,4M17,4H21A1,1 0 0,1 22,5V19A1,1 0 0,1 21,20H17A1,1 0 0,1 16,19V5A1,1 0 0,1 17,4M4,18H6V13H4V18M11,11H13V6H11V11M18,18H20V13H18V18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDipSwitch.svg',
  mixins: [icon]
};
</script>