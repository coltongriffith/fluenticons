<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-card-account-phone" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22,3H2A2,2 0 0,0 0,5V19A2,2 0 0,0 2,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M8,6A3,3 0 0,1 11,9A3,3 0 0,1 8,12A3,3 0 0,1 5,9A3,3 0 0,1 8,6M14,18H2V17C2,15 6,13.9 8,13.9C10,13.9 14,15 14,17V18M17.85,14H19.5L21,16L19,18C17.7,17 16.73,15.61 16.28,14C16.1,13.36 16,12.69 16,12C16,11.31 16.1,10.64 16.28,10C16.73,8.38 17.7,7 19,6L21,8L19.5,10H17.85C17.63,10.63 17.5,11.3 17.5,12C17.5,12.7 17.63,13.37 17.85,14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCardAccountPhone.svg',
  mixins: [icon]
};
</script>