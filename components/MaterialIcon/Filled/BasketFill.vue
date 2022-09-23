<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-basket-fill" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,2H6V5H3V2M6,7H9V10H6V7M8,2H11V5H8V2M17,11L12,6H15V2H19V6H22L17,11M7.5,22C6.72,22 6.04,21.55 5.71,20.9V20.9L3.1,13.44L3,13A1,1 0 0,1 4,12H20A1,1 0 0,1 21,13L20.96,13.29L18.29,20.9C17.96,21.55 17.28,22 16.5,22H7.5M7.61,20H16.39L18.57,14H5.42L7.61,20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBasketFill.svg',
  mixins: [icon]
};
</script>