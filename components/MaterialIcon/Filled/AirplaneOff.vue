<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-airplane-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.84 22.73L18 19.9L17.38 20.53L16 17.89L12.35 14.24L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L10.23 12.12L6.59 8.5L3.94 7.09L4.57 6.46L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M16.67 9.92L20.56 6.03C21.15 5.45 21.15 4.5 20.56 3.91S19 3.33 18.44 3.91L14.55 7.8L9.94 6.74L17.74 14.54L16.67 9.92Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAirplaneOff.svg',
  mixins: [icon]
};
</script>