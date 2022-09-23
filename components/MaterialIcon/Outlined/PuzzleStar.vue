<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-puzzle-star-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.2 22V21.7C13.2 20.21 12 19 10.5 19C9 19 7.8 20.21 7.8 21.7V22H4C2.9 22 2 21.11 2 20V16.2H2.3C3.79 16.2 5 15 5 13.5S3.79 10.8 2.3 10.8H2V7C2 5.9 2.9 5 4 5H7.04C7.28 3.3 8.74 2 10.5 2S13.72 3.3 13.96 5H17C18.11 5 19 5.9 19 7V10.04C20.45 10.25 21.61 11.34 21.91 12.76C21.05 12.28 20.06 12 19 12C18.89 12 18.78 12 18.67 12C18.61 12 18.56 12 18.5 12H17V7H12V5.5C12 4.67 11.33 4 10.5 4S9 4.67 9 5.5V7H4V9.12C5.76 9.8 7 11.5 7 13.5S5.75 17.2 4 17.88V20H6.12C6.8 18.25 8.5 17 10.5 17C11.43 17 12.29 17.28 13 17.74C13 17.83 13 17.91 13 18C13 19.54 13.58 20.94 14.54 22H13.2M19 20.09L16.5 21.58L17.18 18.77L15 16.89L17.87 16.64L19 14L20.11 16.64L23 16.89L20.8 18.77L21.45 21.58L19 20.09" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedPuzzleStar',
  mixins: [icon]
};
</script>