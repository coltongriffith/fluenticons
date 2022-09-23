<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-butterfly" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 21H11V6L9.03 3.97L10 3L12 5L14 3L15 4L13 6V21M7 6C4.24 6 2 8.24 2 11C2 12.64 2.79 14.09 4 15H4V17C4 19.21 5.79 21 8 21C8.72 21 9.39 20.81 9.97 20.5L10 20.46V7C9.16 6.37 8.13 6 7 6M6.5 12.5L5 11L6.5 9.5L8 11L6.5 12.5M22 11C22 8.24 19.76 6 17 6C15.88 6 14.85 6.37 14 7L14 7V20.46C14.59 20.81 15.27 21 16 21C18.21 21 20 19.21 20 17V15H20C21.21 14.09 22 12.64 22 11M17.5 12.5L16 11L17.5 9.5L19 11L17.5 12.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledButterfly.svg',
  mixins: [icon]
};
</script>