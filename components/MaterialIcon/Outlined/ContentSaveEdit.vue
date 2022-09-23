<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-content-save-edit-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 19H10V21H4C2.89 21 2 20.1 2 19V5C2 3.9 2.89 3 4 3H16L20 7V9.12L18 11.12V7.83L15.17 5H4V19M14 10V6H5V10H14M20.42 12.3C20.31 12.19 20.18 12.13 20.04 12.13C19.9 12.13 19.76 12.19 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.92 14.14 21.92 13.79 21.7 13.58L20.42 12.3M12 19.94V22H14.06L20.12 15.93L18.07 13.88L12 19.94M14 15C14 13.34 12.66 12 11 12S8 13.34 8 15 9.34 18 11 18C11.04 18 11.08 18 11.13 18L14 15.13C14 15.09 14 15.05 14 15" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedContentSaveEdit',
  mixins: [icon]
};
</script>