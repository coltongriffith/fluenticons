<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-gender-non-binary" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 3H11V5.27L9.04 4.13L8.04 5.87L10 7L8.04 8.13L9.04 9.87L11 8.73V12.1C8.72 12.56 7 14.58 7 17C7 19.76 9.24 22 12 22S17 19.76 17 17C17 14.58 15.28 12.56 13 12.1V8.73L14.96 9.87L15.96 8.13L14 7L15.96 5.87L14.96 4.13L13 5.27V3M12 20C10.35 20 9 18.65 9 17S10.35 14 12 14 15 15.35 15 17 13.65 20 12 20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledGenderNonBinary.svg',
  mixins: [icon]
};
</script>