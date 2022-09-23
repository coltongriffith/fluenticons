<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-nintendo-game-boy" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7 1C5.9 1 5 1.9 5 3V21C5 22.11 5.9 23 7 23H14C16.76 23 19 20.76 19 18V3C19 1.9 18.11 1 17 1H7M8 4H16V11H8V4M9 14H10V16H12V17H10V19H9V17H7V16H9V14M16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15M14 17C14.55 17 15 17.45 15 18C15 18.55 14.55 19 14 19C13.45 19 13 18.55 13 18C13 17.45 13.45 17 14 17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledNintendoGameBoy.svg',
  mixins: [icon]
};
</script>