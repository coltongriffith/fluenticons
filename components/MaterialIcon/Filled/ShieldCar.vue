<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-shield-car" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.42 7.5L16 11H8L9.42 7.5H14.42M9 12C8.45 12 8 12.45 8 13S8.45 14 9 14 10 13.55 10 13 9.55 12 9 12M15 12C14.45 12 14 12.45 14 13S14.45 14 15 14 16 13.55 16 13 15.55 12 15 12M21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5M18 12L15.84 7C15.64 6.42 15.08 6 14.42 6H9.42C8.76 6 8.2 6.42 8 7L6 12V16C6 16.55 6.45 17 7 17H8C8.55 17 9 16.55 9 16V15H15V16C15 16.55 15.45 17 16 17H17C17.55 17 18 16.55 18 16V12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledShieldCar.svg',
  mixins: [icon]
};
</script>