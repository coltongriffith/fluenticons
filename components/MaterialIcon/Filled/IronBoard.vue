<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-iron-board" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 6H16V4.8C16 3.68 16.56 2.63 17.5 2C18.44 2.63 19 3.68 19 4.8V6M15.28 13.63L19.59 19C20.38 19.06 21 19.7 21 20.5C21 21.33 20.33 22 19.5 22S18 21.33 18 20.5C18 20.42 18 20.34 18 20.26L14 15.23L10 20.26C10 20.34 10 20.42 10 20.5C10 21.33 9.33 22 8.5 22S7 21.33 7 20.5C7 19.7 7.63 19.06 8.41 19L12.72 13.63L9 9H3V7H21V9H19L15.28 13.63M14 12L16.42 9H11.58L14 12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledIronBoard.svg',
  mixins: [icon]
};
</script>