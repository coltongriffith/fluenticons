<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-beekeeper" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 5H16C16 3.34 14.21 2 12 2C9.79 2 8 3.34 8 5H5C4.45 5 4 5.45 4 6S4.45 7 5 7V14C5 15.11 5.9 16 7 16H17C18.11 16 19 15.11 19 14V7C19.55 7 20 6.55 20 6S19.55 5 19 5M17 14H7V7H17V14M15.86 8C15.94 8.32 16 8.65 16 9C16 11.21 14.21 13 12 13S8 11.21 8 9C8 8.65 8.06 8.32 8.14 8H10.28C10.11 8.3 10 8.63 10 9C10 10.1 10.9 11 12 11S14 10.1 14 9C14 8.63 13.89 8.3 13.72 8H15.86M20 19V22H4V19C4 18.22 4.47 17.55 5.18 17H12C9.28 17 6.19 18.29 6 19V20H18V19C17.81 18.29 14.72 17 12 17H18.82C19.53 17.55 20 18.22 20 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBeekeeper.svg',
  mixins: [icon]
};
</script>