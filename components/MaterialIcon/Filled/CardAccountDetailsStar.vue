<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-card-account-details-star" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 22.09L22.45 23.58L21.8 20.77L24 18.89L21.11 18.64L20 16L18.87 18.64L16 18.89L18.18 20.77L17.5 23.58L20 22.09M14.08 21H2C.95 21 0 20.05 0 19V5C0 3.95 .95 3 2 3H22C23.05 3 24 3.95 24 5V15.53C22.94 14.58 21.54 14 20 14C16.69 14 14 16.69 14 20C14 20.34 14.03 20.68 14.08 21M8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91M8 6C6.35 6 5 7.35 5 9C5 10.65 6.35 12 8 12C9.65 12 11 10.65 11 9C11 7.35 9.65 6 8 6M21 10H14V11H21V10M22 8H14V9H22V8M22 6H14V7H22V6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCardAccountDetailsStar.svg',
  mixins: [icon]
};
</script>