<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-dishwasher-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V4C18 2.9 17.11 2 16 2M8 4C8.55 4 9 4.45 9 5S8.55 6 8 6 7 5.55 7 5 7.45 4 8 4M5 4C5.55 4 6 4.45 6 5S5.55 6 5 6 4 5.55 4 5 4.45 4 5 4M16 20H4V8H16V20M12.67 15.33C12.69 16.03 12.41 16.71 11.91 17.21C10.86 18.26 9.15 18.27 8.09 17.21C7.59 16.71 7.31 16.03 7.33 15.33C7.4 14.62 7.63 13.94 8 13.33C8.37 12.5 8.81 11.73 9.33 11L10 10C11.79 12.59 12.67 14.36 12.67 15.33M20 15H22V17H20V15M20 7H22V13H20V7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDishwasherAlert.svg',
  mixins: [icon]
};
</script>