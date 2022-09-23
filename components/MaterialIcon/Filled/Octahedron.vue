<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-octahedron" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21.7 11.29H21.71L12.71 2.29C12.5 2.1 12.26 2 12 2C11.74 2 11.5 2.1 11.29 2.29L2.29 11.29H2.3C1.91 11.68 1.91 12.32 2.3 12.71H2.29L11.29 21.71C11.5 21.9 11.74 22 12 22C12.26 22 12.5 21.9 12.71 21.71L21.71 12.71H21.7C22.09 12.32 22.09 11.68 21.7 11.29M13 8.28V5.41L17.3 9.71L13 8.28M11 8.28L6.7 9.71L11 5.41V8.28M12 10.05L17.84 12L12 13.95L6.16 12L12 10.05M11 15.72V18.59L6.7 14.29L11 15.72M13 15.72L17.3 14.29L13 18.59V15.72Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledOctahedron.svg',
  mixins: [icon]
};
</script>