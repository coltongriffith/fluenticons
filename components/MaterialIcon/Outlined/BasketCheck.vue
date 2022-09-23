<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-basket-check-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21.63 16.27L17.76 20.17L16.41 18.8L15 20.22L17.75 23L23.03 17.68L21.63 16.27M14 15C14 16.1 13.1 17 12 17S10 16.1 10 15 10.9 13 12 13 14 13.9 14 15M13 20C13 19.66 13.04 19.33 13.09 19H5.5L3.31 11H20.7L19.86 14.07C20.54 14.17 21.18 14.37 21.76 14.68L22.97 10.27L23 10C23 9.45 22.55 9 22 9H17.21L12.83 2.44C12.64 2.16 12.32 2 12 2S11.36 2.16 11.17 2.45L6.79 9H2C1.45 9 1 9.45 1 10C1 10.09 1 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H13.09C13.04 20.67 13 20.34 13 20M12 4.8L14.8 9H9.2L12 4.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedBasketCheck',
  mixins: [icon]
};
</script>