<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-peanut" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16 12.77A2 2 0 0 1 15.86 10.12A5 5 0 0 0 13.04 2.12A5.74 5.74 0 0 0 12 2A5 5 0 0 0 7 7A5 5 0 0 0 8.11 10.12A2 2 0 0 1 8 12.72A5.5 5.5 0 0 0 10.81 21.87A5.42 5.42 0 0 0 12 22A5.5 5.5 0 0 0 16 12.77M13 5A1 1 0 1 1 12 6A1 1 0 0 1 13 5M11 18A1 1 0 1 1 12 17A1 1 0 0 1 11 18M12 15A1 1 0 1 1 13 16A1 1 0 0 1 12 15M14 19A1 1 0 1 1 15 18A1 1 0 0 1 14 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPeanut.svg',
  mixins: [icon]
};
</script>