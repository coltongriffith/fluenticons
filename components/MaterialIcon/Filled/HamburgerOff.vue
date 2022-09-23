<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hamburger-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 11C21.11 11 22 11.9 22 13S21.11 15 20 15H18.2L14.2 11H20M20.42 19.77L20.42 19.76L17.66 17H17.65L15.65 15H15.66L11.66 11H11.66L9.66 9H9.66L2.39 1.73L1.11 3L4.12 6C3 7.5 3 9 3 9H7.11L9.11 11H4C2.9 11 2 11.9 2 13S2.9 15 4 15H13.11L15.11 17H3V18C3 19.66 4.34 21 6 21H18C18.33 21 18.65 20.93 18.94 20.83L20.84 22.73L22.11 21.46L20.42 19.77M21 9C21 9 21 3 12 3C9.88 3 8.28 3.34 7.05 3.85L12.2 9H21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHamburgerOff.svg',
  mixins: [icon]
};
</script>