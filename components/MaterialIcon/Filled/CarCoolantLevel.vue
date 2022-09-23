<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-car-coolant-level" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 7V5H21V3H13V5H15V7H1V21H23V7H19M21 14.42C20.71 14.13 20.5 14 20 14C19.33 14 19.21 14.21 18.71 14.71S17.33 16 16 16 13.79 15.21 13.29 14.71 12.67 14 12 14C11.78 14 11.63 14.03 11.5 14.08C11.22 14.18 11.05 14.37 10.71 14.71C10.21 15.21 9.33 16 8 16S5.79 15.21 5.29 14.71 4.67 14 4 14C3.5 14 3.29 14.13 3 14.42V9H21V14.42Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCarCoolantLevel.svg',
  mixins: [icon]
};
</script>