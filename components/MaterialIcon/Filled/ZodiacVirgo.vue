<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-zodiac-virgo" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5,19.13C20,17.77 20,15.18 20,14A4,4 0 0,0 16,10C15.3,10 14.6,10.2 14,10.56V6A3,3 0 0,0 11,3C10.25,3 9.55,3.29 9,3.78C7.86,2.76 6.14,2.76 5,3.78C4.45,3.28 3.74,3 3,3V5A1,1 0 0,1 4,6V16H6V6A1,1 0 0,1 7,5A1,1 0 0,1 8,6V16H10V6A1,1 0 0,1 11,5A1,1 0 0,1 12,6V14C12,15.18 12,17.77 13.5,19.13C12.72,19.54 11.88,19.84 11,20V22C12.29,22 14.84,20.74 16,20.13C17.16,20.74 19.71,22 21,22V20C20.12,19.84 19.28,19.54 18.5,19.13M16,12A2,2 0 0,1 18,14C18,16.92 17.46,18 16,18C14.54,18 14,16.92 14,14A2,2 0 0,1 16,12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledZodiacVirgo.svg',
  mixins: [icon]
};
</script>