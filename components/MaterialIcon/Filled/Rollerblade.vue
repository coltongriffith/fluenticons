<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-rollerblade" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4.5 18C3.12 18 2 19.12 2 20.5S3.12 23 4.5 23 7 21.88 7 20.5 5.88 18 4.5 18M18.5 18C17.12 18 16 19.12 16 20.5S17.12 23 18.5 23 21 21.88 21 20.5 19.88 18 18.5 18M20 17C20 15.63 20.09 13.81 19.5 12.95C18.55 10.9 15.82 10.56 13.91 10.05C13 10 12 9 11.82 8H9C8.71 8 8.5 7.78 8.5 7.5C8.5 7.22 8.71 7 9 7H11.5V6H9C8.71 6 8.5 5.78 8.5 5.5C8.5 5.22 8.71 5 9 5H11.5V2H3V17H20M11.5 18C10.12 18 9 19.12 9 20.5S10.12 23 11.5 23 14 21.88 14 20.5 12.88 18 11.5 18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRollerblade.svg',
  mixins: [icon]
};
</script>