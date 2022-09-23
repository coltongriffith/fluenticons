<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-head-lightbulb" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M14 14H12V13H14V14M15.6 9.5C15.34 9.94 14.96 10.32 14.5 10.58V12H11.5V10.58C10.07 9.75 9.57 7.92 10.4 6.5S13.07 4.56 14.5 5.38 16.43 8.05 15.6 9.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHeadLightbulb.svg',
  mixins: [icon]
};
</script>