<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-leak-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10,3H8C8,3.37 7.96,3.72 7.88,4.06L9.47,5.65C9.81,4.84 10,3.94 10,3M3,4.27L5.84,7.11C5.03,7.67 4.06,8 3,8V10C4.61,10 6.09,9.45 7.27,8.54L8.7,9.97C7.14,11.24 5.16,12 3,12V14C5.71,14 8.19,13 10.11,11.38L12.61,13.88C11,15.81 10,18.29 10,21H12C12,18.84 12.76,16.86 14.03,15.31L15.46,16.74C14.55,17.91 14,19.39 14,21H16C16,19.94 16.33,18.97 16.89,18.16L19.73,21L21,19.73L4.27,3L3,4.27M14,3H12C12,4.5 11.63,5.91 11,7.16L12.44,8.62C13.42,7 14,5.06 14,3M19.94,16.12C20.28,16.04 20.63,16 21,16V14C20.06,14 19.16,14.19 18.34,14.5L19.94,16.12M15.38,11.56L16.84,13C18.09,12.37 19.5,12 21,12V10C18.94,10 17,10.58 15.38,11.56Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLeakOff.svg',
  mixins: [icon]
};
</script>