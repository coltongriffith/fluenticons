<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-microwave-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.11 21.46L2.39 1.73L1.11 3L3.26 5.15C2.5 5.44 2 6.16 2 7V17C2 18.11 2.9 19 4 19H17.11L20.84 22.73L22.11 21.46M4 17V7H5.11L15.11 17H4M16 7V12.8L21.5 18.31C21.81 17.95 22 17.5 22 17V7C22 5.9 21.11 5 20 5H8.2L10.2 7H16M19 7C19.55 7 20 7.45 20 8S19.55 9 19 9 18 8.55 18 8 18.45 7 19 7M19 11C19.55 11 20 11.45 20 12S19.55 13 19 13 18 12.55 18 12 18.45 11 19 11M13 9.8V9H15V11.8L13 9.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMicrowaveOff.svg',
  mixins: [icon]
};
</script>