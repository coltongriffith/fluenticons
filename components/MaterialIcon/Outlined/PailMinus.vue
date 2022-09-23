<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pail-minus-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 6H3V4H21V6H20L18.6 13C17.83 13.07 17.11 13.26 16.45 13.58L17.96 6H6.04L6.5 8.22L4.65 9.27L4 6M12.86 8C12.58 7.5 11.97 7.35 11.5 7.63L3.27 12.38C2.79 12.66 2.62 13.27 2.9 13.75C3.18 14.23 3.79 14.39 4.27 14.11L12.5 9.36C12.97 9.09 13.14 8.47 12.86 8M13 19H8.64L7.73 14.43L5.9 15.5L7 21H13.35C13.13 20.37 13 19.7 13 19M15 18V20H23V18H15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedPailMinus',
  mixins: [icon]
};
</script>