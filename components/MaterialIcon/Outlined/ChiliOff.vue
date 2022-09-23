<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-chili-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15 8.28C15.6 8.63 16 9.27 16 10V12.8L11.5 8.29L12 8L13.75 9L15 8.28M12 6.5L13.75 7.5L15.27 6.63C14.72 5.66 13.91 4.94 12.97 4.65C12.79 3.16 11.54 2 10 2V4C10.44 4 10.8 4.29 10.94 4.69C10.26 4.92 9.66 5.37 9.17 5.97L10.54 7.34L12 6.5M22.11 21.46L20.84 22.73L16 17.89V22C16 22 8 20 8 11V10C8 9.97 8 9.94 8 9.9L1.11 3L2.39 1.73L22.11 21.46M14 15.89L10.07 11.96C10.38 15.63 12.31 17.74 14 18.87V15.89Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedChiliOff',
  mixins: [icon]
};
</script>