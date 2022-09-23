<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-numeric-10-box-multiple-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 17V3H7V17H21M21 1C22.11 1 23 1.9 23 3V17C23 18.11 22.11 19 21 19H7C5.9 19 5 18.11 5 17V3C5 1.9 5.9 1 7 1H21M3 5V21H19V23H3C1.9 23 1 22.11 1 21V5H3M12 5H8V7H10V15H12V5M18 5H16C14.9 5 14 5.9 14 7V13C14 14.11 14.9 15 16 15H18C19.11 15 20 14.11 20 13V7C20 5.9 19.11 5 18 5M18 13H16V7H18V13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedNumeric10BoxMultiple',
  mixins: [icon]
};
</script>