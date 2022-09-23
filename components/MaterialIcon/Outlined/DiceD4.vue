<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-dice-d4-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.43,15.15H14.29V16.36H13.43V18H11.92V16.36H8.82L8.75,15.41L11.91,10.42H13.43V15.15M10.25,15.15H11.92V12.47L10.25,15.15M22,21H2C1.64,21 1.31,20.81 1.13,20.5C0.95,20.18 0.96,19.79 1.15,19.5L11.15,3C11.5,2.38 12.5,2.38 12.86,3L22.86,19.5C23.04,19.79 23.05,20.18 22.87,20.5C22.69,20.81 22.36,21 22,21M3.78,19H20.23L12,5.43L3.78,19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedDiceD4',
  mixins: [icon]
};
</script>