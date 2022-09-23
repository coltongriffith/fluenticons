<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-zodiac-aries" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16,2C14.95,2 13.91,2.27 13,2.81C12.64,3 12.3,3.26 12,3.54C11.7,3.26 11.36,3 11,2.81C10.09,2.27 9.05,2 8,2A6,6 0 0,0 2,8A6,6 0 0,0 8,14V12A4,4 0 0,1 4,8A4,4 0 0,1 8,4C9,4 10,4.39 10.75,5.1C10.84,5.18 10.92,5.27 11,5.36V22H13V5.36C13.08,5.27 13.16,5.18 13.25,5.1C14.85,3.58 17.38,3.64 18.91,5.25C20.43,6.85 20.36,9.38 18.76,10.9C18,11.61 17.03,12 16,12V14A6,6 0 0,0 22,8A6,6 0 0,0 16,2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledZodiacAries.svg',
  mixins: [icon]
};
</script>