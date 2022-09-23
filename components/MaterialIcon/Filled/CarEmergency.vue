<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-car-emergency" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 0V3H13V0H11M7.88 1.46L6.46 2.87L8.59 5L10 3.58L7.88 1.46M16.12 1.46L14 3.58L15.41 5L17.54 2.88L16.12 1.46M12 5A2 2 0 0 0 10 7V8H6.5C5.84 8 5.28 8.42 5.08 9L3 15V23A1 1 0 0 0 4 24H5A1 1 0 0 0 6 23V22H18V23A1 1 0 0 0 19 24H20A1 1 0 0 0 21 23V15L18.92 9C18.72 8.42 18.16 8 17.5 8H14V7A2 2 0 0 0 12 5M6.5 9.5H17.5L19 14H5L6.5 9.5M6.5 16A1.5 1.5 0 0 1 8 17.5A1.5 1.5 0 0 1 6.5 19A1.5 1.5 0 0 1 5 17.5A1.5 1.5 0 0 1 6.5 16M17.5 16A1.5 1.5 0 0 1 19 17.5A1.5 1.5 0 0 1 17.5 19A1.5 1.5 0 0 1 16 17.5A1.5 1.5 0 0 1 17.5 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCarEmergency.svg',
  mixins: [icon]
};
</script>