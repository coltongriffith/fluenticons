<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-washing-machine-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12.83 11.17C14.39 12.73 14.39 15.27 12.83 16.83S8.73 18.39 7.17 16.83L12.83 11.17M4 2H16C17.11 2 18 2.9 18 4V20C18 21.11 17.11 22 16 22H4C2.9 22 2 21.11 2 20V4C2 2.9 2.9 2 4 2M5 4C4.45 4 4 4.45 4 5S4.45 6 5 6 6 5.55 6 5 5.55 4 5 4M8 4C7.45 4 7 4.45 7 5S7.45 6 8 6 9 5.55 9 5 8.55 4 8 4M10 8C6.69 8 4 10.69 4 14S6.69 20 10 20 16 17.31 16 14 13.31 8 10 8M20 15H22V17H20V15M20 7H22V13H20V7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWashingMachineAlert.svg',
  mixins: [icon]
};
</script>