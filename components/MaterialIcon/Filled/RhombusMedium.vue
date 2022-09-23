<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-rhombus-medium" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 6.46C11.72 6.46 11.44 6.56 11.22 6.78L6.78 11.22C6.35 11.65 6.35 12.35 6.78 12.78L11.22 17.22C11.65 17.65 12.35 17.65 12.78 17.22L17.22 12.78C17.65 12.35 17.65 11.65 17.22 11.22L12.78 6.78C12.56 6.56 12.28 6.46 12 6.46Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRhombusMedium.svg',
  mixins: [icon]
};
</script>