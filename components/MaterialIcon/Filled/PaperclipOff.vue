<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-paperclip-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8.5 5.3L7.16 3.96C7.62 2.26 9.15 1 11 1C13.21 1 15 2.79 15 5V11.8L13.5 10.3V5C13.5 3.62 12.38 2.5 11 2.5S8.5 3.62 8.5 5V5.3M18 6H16.5V13.3L18 14.8V6M22.11 21.46L20.84 22.73L17.62 19.5C16.81 21.55 14.83 23 12.5 23C9.46 23 7 20.54 7 17.5V8.89L1.11 3L2.39 1.73L22.11 21.46M11.5 15.5C11.5 16.05 11.95 16.5 12.5 16.5S13.5 16.05 13.5 15.5V15.39L11.5 13.39V15.5M16.42 18.31L14.73 16.62C14.32 17.43 13.5 18 12.5 18C11.12 18 10 16.88 10 15.5V11.89L8.5 10.39V17.5C8.5 19.71 10.29 21.5 12.5 21.5C14.43 21.5 16.04 20.13 16.42 18.31M10 6.8L11.5 8.3V6H10V6.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPaperclipOff.svg',
  mixins: [icon]
};
</script>