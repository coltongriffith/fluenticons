<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-account-multiple-minus-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H0V10H8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedAccountMultipleMinus',
  mixins: [icon]
};
</script>