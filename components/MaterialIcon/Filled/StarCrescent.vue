<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-star-crescent" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12.3,2C12.2,2 12.1,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C15,22 16.7,21 18.5,19.5C13,21 8,17 8,12C8,7 13,3 18.5,4.5C16.86,2.86 14.62,1.96 12.3,2M16.8,6.2L15.3,9.7L11.6,10L14.5,12.5L13.6,16L16.8,14L20,16L19,12.5L22,10L18.3,9.7L16.8,6.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledStarCrescent.svg',
  mixins: [icon]
};
</script>