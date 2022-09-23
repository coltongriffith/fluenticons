<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-truck-fast-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M.75 7.5H10.5L11.25 9H1.5L.75 7.5M1.75 10.5H11.5L12.25 12H2.5L1.75 10.5M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M8 18.5C8.83 18.5 9.5 17.83 9.5 17C9.5 16.17 8.83 15.5 8 15.5C7.17 15.5 6.5 16.17 6.5 17C6.5 17.83 7.17 18.5 8 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H11C11 18.66 9.65 20 8 20C6.34 20 5 18.66 5 17H3V13.5 13.5H5V15H5.76C6.31 14.39 7.11 14 8 14C8.89 14 9.69 14.39 10.24 15H15V6H3V6C3 4.89 3.89 4 5 4H17V8H20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedTruckFast',
  mixins: [icon]
};
</script>