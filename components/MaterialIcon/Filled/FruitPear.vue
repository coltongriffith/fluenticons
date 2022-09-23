<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fruit-pear" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 16C18 19.31 15.31 22 12 22C8.69 22 6 19.31 6 16C6 13 8 13 8 10C8 8.56 8.75 7.22 10 6.5C10.4 6.27 10.82 6.12 11.25 6.04V5C11.25 4.63 11.17 4.42 11.03 4.28C10.9 4.14 10.63 4 10 4V2.5C10.88 2.5 11.6 2.73 12.09 3.22C12.58 3.71 12.75 4.38 12.75 5V6.04C13.18 6.12 13.61 6.27 14 6.5C15.25 7.22 16 8.56 16 10C16 13 18 13 18 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFruitPear.svg',
  mixins: [icon]
};
</script>