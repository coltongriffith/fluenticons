<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-motorbike-electric" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.42 8L13.41 4H9V6H12.59L14.59 8H6.5C4 8 2 10 2 12.5S4 17 6.5 17C8.72 17 10.56 15.38 10.92 13.27L13.04 12C13 12.17 13 12.33 13 12.5C13 15 15 17 17.5 17S22 15 22 12.5 20 8 17.5 8M8.84 13.26C8.5 14.27 7.58 15 6.47 15C5.09 15 3.97 13.88 3.97 12.5S5.09 10 6.47 10C7.59 10 8.5 10.74 8.84 11.75H6V13.25L8.84 13.26M17.47 15C16.09 15 14.97 13.88 14.97 12.5S16.09 10 17.47 10C18.85 10 19.97 11.12 19.97 12.5S18.85 15 17.47 15M11 20H7L13 23V21H17L11 18V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMotorbikeElectric.svg',
  mixins: [icon]
};
</script>