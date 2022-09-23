<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hat-fedora" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.11,11.92C19.13,11.71 19.14,11.5 19.14,11.29C19.14,7.86 17.71,4.14 16.28,4.14C14.85,4.14 13.42,5.57 12,5.57C10.57,5.57 9.14,4.14 7.71,4.14C6.28,4.14 4.86,7.79 4.86,11.29C4.86,11.5 4.86,11.71 4.88,11.92C7.22,12.45 9.6,12.72 12,12.71C14.45,12.71 16.83,12.44 19.11,11.92M3.45,18.18C9,19.85 14.96,19.86 20.54,18.18C20.96,18.04 21.33,17.77 21.59,17.41C21.85,17.05 22,16.61 22,16.17C22,15.72 21.86,15.29 21.61,14.92C21.35,14.56 21,14.29 20.56,14.14C17.86,15 15,15.45 12,15.45C9,15.45 6.13,15 3.43,14.14C3,14.29 2.65,14.57 2.39,14.93C2.14,15.29 2,15.72 2,16.17C2,17.11 2.61,17.9 3.45,18.18V18.18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHatFedora.svg',
  mixins: [icon]
};
</script>