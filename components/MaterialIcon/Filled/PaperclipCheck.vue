<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-paperclip-check" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.5 21.36C13.7 21.84 13.97 22.29 14.29 22.7C13.73 22.89 13.13 23 12.5 23C9.46 23 7 20.54 7 17.5V5C7 2.79 8.79 1 11 1S15 2.79 15 5V14.54C14.03 15.41 13.35 16.58 13.1 17.92C12.91 17.97 12.71 18 12.5 18C11.12 18 10 16.88 10 15.5V6H11.5V15.5C11.5 16.05 11.95 16.5 12.5 16.5S13.5 16.05 13.5 15.5V5C13.5 3.62 12.38 2.5 11 2.5S8.5 3.62 8.5 5V17.5C8.5 19.71 10.29 21.5 12.5 21.5C12.84 21.5 13.17 21.44 13.5 21.36M18 6H16.5V13.55C16.97 13.34 17.47 13.18 18 13.09V6M21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPaperclipCheck.svg',
  mixins: [icon]
};
</script>