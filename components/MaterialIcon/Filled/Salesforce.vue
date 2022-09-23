<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-salesforce" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.38,6.37C17.68,6.37 17.07,6.58 16.47,6.78C15.77,5.57 14.46,4.77 13.05,4.77C11.95,4.77 10.95,5.27 10.24,5.97C9.44,4.97 8.23,4.26 6.83,4.26C4.5,4.26 2.5,6.17 2.5,8.5C2.5,9.09 2.71,9.69 2.91,10.29C1.8,10.9 1,12.1 1,13.5C1,15.5 2.61,17.22 4.62,17.22C4.92,17.22 5.22,17.22 5.42,17.12C5.82,18.63 7.33,19.74 9.14,19.74C10.84,19.74 12.25,18.73 12.75,17.32C13.26,17.53 13.76,17.73 14.26,17.73C15.57,17.73 16.77,17 17.37,15.92C17.68,16 18,16 18.28,16C20.89,16 23,13.91 23,11.2C23.1,8.5 21,6.37 18.38,6.37Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSalesforce.svg',
  mixins: [icon]
};
</script>