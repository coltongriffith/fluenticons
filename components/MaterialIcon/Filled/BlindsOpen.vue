<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-blinds-open" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3 2H21C21.55 2 22 2.45 22 3V5C22 5.55 21.55 6 21 6H20V7C20 7.55 19.55 8 19 8H13V10.17C14.17 10.58 15 11.7 15 13C15 14.66 13.66 16 12 16C10.34 16 9 14.66 9 13C9 11.69 9.84 10.58 11 10.17V8H5C4.45 8 4 7.55 4 7V6H3C2.45 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2M12 12C11.45 12 11 12.45 11 13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13C13 12.45 12.55 12 12 12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBlindsOpen.svg',
  mixins: [icon]
};
</script>