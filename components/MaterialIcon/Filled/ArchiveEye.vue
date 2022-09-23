<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-archive-eye" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 7H3V3H21V7M9.14 19.75C9.32 20.19 9.54 20.61 9.78 21H4V8H20V13.55C19.06 13.19 18.05 13 17 13C13.5 13 10.43 15.06 9.14 18.25L8.85 19L9.14 19.75M9 13H15V11.5C15 11.22 14.78 11 14.5 11H9.5C9.22 11 9 11.22 9 11.5V13M17 18C16.44 18 16 18.44 16 19S16.44 20 17 20 18 19.56 18 19 17.56 18 17 18M23 19C22.06 21.34 19.73 23 17 23S11.94 21.34 11 19C11.94 16.66 14.27 15 17 15S22.06 16.66 23 19M19.5 19C19.5 17.62 18.38 16.5 17 16.5S14.5 17.62 14.5 19 15.62 21.5 17 21.5 19.5 20.38 19.5 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledArchiveEye.svg',
  mixins: [icon]
};
</script>