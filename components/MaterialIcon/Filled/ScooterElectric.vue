<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-scooter-electric" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7.82 16H15V15C15 12.79 16.79 11 19 11H19.74L17.84 2.56C17.63 1.65 16.82 1 15.89 1H12V3H15.89L17.29 9.25H17.28C15.12 9.9 13.47 11.73 13.09 14H7.82C7.34 12.66 5.96 11.76 4.4 12.06C3.22 12.29 2.27 13.26 2.05 14.44C1.7 16.34 3.16 18 5 18C6.3 18 7.4 17.16 7.82 16M5 16C4.45 16 4 15.55 4 15S4.45 14 5 14 6 14.45 6 15 5.55 16 5 16M19 12C17.34 12 16 13.34 16 15S17.34 18 19 18 22 16.66 22 15 20.66 12 19 12M19 16C18.45 16 18 15.55 18 15S18.45 14 19 14 20 14.45 20 15 19.55 16 19 16M11 20H7L13 23V21H17L11 18V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledScooterElectric.svg',
  mixins: [icon]
};
</script>