<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-coffee-maker" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 6V4H20V2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H20V20H15.97C17.2 19.09 18 17.64 18 16V11H8V16C8 17.64 8.81 19.09 10.03 20H6V4H8V6C8 6.55 8.45 7 9 7H17C17.55 7 18 6.55 18 6M13 8C13.55 8 14 8.45 14 9S13.55 10 13 10 12 9.55 12 9 12.45 8 13 8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCoffeeMaker.svg',
  mixins: [icon]
};
</script>