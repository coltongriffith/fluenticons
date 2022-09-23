<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-domino-mask" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.83 9.81C14.7 9.7 13.69 10.38 13.46 11.5C13.46 11.84 14.81 12.29 16.05 12.29C17.29 12.29 18.41 11.5 18.41 11.28C18.41 11.05 17.63 9.93 15.83 9.81M8.18 9.81C6.38 9.93 5.59 10.94 5.59 11.27C5.59 11.5 6.82 12.29 7.95 12.29S10.54 11.84 10.54 11.5C10.31 10.38 9.19 9.7 8.18 9.81M16.95 16C15.04 16 13.8 13.75 12 13.75S8.85 16 7.05 16C4.69 16 3 13.86 3 10.04C3 7.68 3.68 7 6.71 7S10.54 8.24 12 8.24 14.36 7 17.29 7 21 7.79 21 10.04C21 13.86 19.31 16 16.95 16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDominoMask.svg',
  mixins: [icon]
};
</script>