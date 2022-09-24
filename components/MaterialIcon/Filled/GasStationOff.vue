<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-gas-station-off" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1 4.27L2.28 3L21 21.72L19.73 23L17.71 21C16.56 20.85 15.65 19.94 15.5 18.78L14 17.27V21H4V7.27L1 4.27M18 10C18.55 10 19 9.55 19 9C19 8.45 18.55 8 18 8C17.45 8 17 8.45 17 9C17 9.55 17.45 10 18 10M12 10V5H6.82L5.06 3.23C5.34 3.08 5.66 3 6 3H12C13.1 3 14 3.89 14 5V12H15C16.1 12 17 12.89 17 14V15.18L11.82 10H12M6 10H6.73L6 9.27V10M19.77 7.23C20.22 7.68 20.5 8.31 20.5 9L20.5 18.67L19 17.18V11.29C18.69 11.42 18.36 11.5 18 11.5C16.62 11.5 15.5 10.38 15.5 9C15.5 7.93 16.17 7.03 17.11 6.67L15 4.56L16.06 3.5L19.78 7.22L19.77 7.23Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledGasStationOff',
  mixins: [icon]
};
</script>