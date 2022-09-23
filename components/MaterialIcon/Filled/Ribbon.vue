<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-ribbon" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.41,19.31L16.59,22.5L18,21.07L14.83,17.9M15.54,11.53H15.53L12,15.07L8.47,11.53H8.46V11.53C7.56,10.63 7,9.38 7,8A5,5 0 0,1 12,3A5,5 0 0,1 17,8C17,9.38 16.44,10.63 15.54,11.53M16.9,13C18.2,11.73 19,9.96 19,8A7,7 0 0,0 12,1A7,7 0 0,0 5,8C5,9.96 5.81,11.73 7.1,13V13L10.59,16.5L6,21.07L7.41,22.5L16.9,13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRibbon.svg',
  mixins: [icon]
};
</script>