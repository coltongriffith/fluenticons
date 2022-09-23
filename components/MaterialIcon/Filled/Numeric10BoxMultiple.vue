<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-numeric-10-box-multiple" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3 5V21H19V23H3C1.9 23 1 22.11 1 21V5H3M16 13H18V7H16V13M21 1H7C5.9 1 5 1.9 5 3V17C5 18.11 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.9 22.11 1 21 1M12 15H10V7H8V5H12V15M20 13C20 14.11 19.11 15 18 15H16C14.9 15 14 14.11 14 13V7C14 5.9 14.9 5 16 5H18C19.11 5 20 5.9 20 7V13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledNumeric10BoxMultiple.svg',
  mixins: [icon]
};
</script>