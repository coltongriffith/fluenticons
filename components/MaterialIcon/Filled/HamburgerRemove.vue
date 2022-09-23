<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hamburger-remove" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 9H3C3 9 3 3 12 3S21 9 21 9M13.35 17H3V18C3 19.66 4.34 21 6 21H13.35C13.13 20.37 13 19.7 13 19C13 18.3 13.13 17.63 13.35 17M21.86 13.73C21.95 13.5 22 13.26 22 13C22 11.9 21.11 11 20 11H11L8.5 13L6 11H4C2.9 11 2 11.9 2 13S2.9 15 4 15H14.54C15.64 13.78 17.23 13 19 13C20.04 13 21 13.26 21.86 13.73M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHamburgerRemove.svg',
  mixins: [icon]
};
</script>