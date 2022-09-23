<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cellphone-key" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7 1C5.9 1 5 1.9 5 3V7H7V4H17V20H7V17H5V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1H7M6 9C4.3 9 3 10.3 3 12S4.3 15 6 15C7.3 15 8.4 14.2 8.8 13H11V15H13V13H15V11H8.8C8.4 9.8 7.3 9 6 9M6 11C6.6 11 7 11.4 7 12S6.6 13 6 13 5 12.6 5 12 5.4 11 6 11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCellphoneKey.svg',
  mixins: [icon]
};
</script>