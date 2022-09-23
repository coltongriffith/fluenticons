<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bag-carry-on" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.6 21.4C15 21.8 15.4 22 16 22S17 21.8 17.4 21.4 18 20.6 18 20 17.8 19 17.4 18.6 16.5 18 16 18 15 18.2 14.6 18.6 14 19.4 14 20 14.2 21 14.6 21.4M6 19C6 19.5 6.2 20 6.6 20.4C7 20.8 7.5 21 8 21V7C7.5 7 7 7.2 6.6 7.6C6.2 8 6 8.5 6 9V19M16 2H12C12 2.5 12.2 3 12.6 3.4C13 3.8 13.5 4 14 4V7H9V21H13.2C13 20.5 13 20.2 13 20C13 19.2 13.3 18.5 13.9 17.9C14.5 17.3 15.2 17 16 17V2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBagCarryOn.svg',
  mixins: [icon]
};
</script>