<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-dishwasher-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.11 21.46L2.39 1.73L1.11 3L4 5.89V20C4 21.11 4.89 22 6 22H18C18.58 22 19.1 21.75 19.46 21.35L20.84 22.73L22.11 21.46M18 20H6V8H6.11L10.5 12.37C10.31 12.69 10.15 13 10 13.33C9.63 13.94 9.4 14.62 9.33 15.33C9.31 16.03 9.59 16.71 10.09 17.21C11.15 18.27 12.86 18.26 13.91 17.21C14.16 16.97 14.35 16.68 14.5 16.36L18 19.89V20M11.2 8H18V14.8L20 16.8V4C20 2.9 19.11 2 18 2H6C5.76 2 5.54 2.05 5.33 2.13L11.2 8M10 4C10.55 4 11 4.45 11 5S10.55 6 10 6 9 5.55 9 5 9.45 4 10 4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDishwasherOff.svg',
  mixins: [icon]
};
</script>