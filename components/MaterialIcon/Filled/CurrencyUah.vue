<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-currency-uah" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14.59 11H18V9H16.32C16.74 8.34 17 7.68 17 7C17 4.37 14.5 3 12 3C9.65 3 7.53 5.06 7.29 5.29L8.71 6.71C9.19 6.23 10.71 5 12 5C13.04 5 15 5.42 15 7C15 7.5 14.5 8.24 13.76 9H6V11H11.63C11.21 11.36 9.75 12.67 9.41 13H6V15H7.68C7.26 15.66 7 16.32 7 17C7 19.63 9.5 21 12 21C14.35 21 16.47 18.94 16.71 18.71L15.29 17.29C14.82 17.77 13.29 19 12 19C10.96 19 9 18.58 9 17C9 16.5 9.5 15.76 10.24 15H18V13H12.38L14.59 11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCurrencyUah.svg',
  mixins: [icon]
};
</script>