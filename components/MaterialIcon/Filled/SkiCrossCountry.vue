<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-ski-cross-country" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 14H17.6V22H19V14M6.44 22H5L7 14H8.44L6.44 22M8.76 9.54V13H7V8.32L11.61 6.31C12.04 6.14 12.5 6.13 12.96 6.27S13.79 6.69 14.06 7.1L15 8.58C15.37 9.25 15.9 9.95 16.62 10.37C17.33 10.79 18.13 11 19 11V12.83C18 12.83 17 12.62 16.13 12.2S14.5 11.06 13.88 10.37L13.31 13.16L15.28 15V22H13.4V16.5L11.5 14.55L9.77 22H7.8L10.43 8.89L8.76 9.54M16 4C16 5.11 15.11 6 14 6S12 5.11 12 4 12.9 2 14 2 16 2.9 16 4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSkiCrossCountry.svg',
  mixins: [icon]
};
</script>