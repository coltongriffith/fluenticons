<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hand-peace-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7,19H15V22H7V19M16.94,1C16.4,0.91 15.87,1.25 15.76,1.8L14.75,7.57C14.53,7.54 14.29,7.5 14,7.47L13.57,7.5L12.41,1.8C12.31,1.26 11.78,0.91 11.24,1C10.7,1.13 10.35,1.66 10.45,2.2L11.65,8.11L7.85,9.8C7.35,10 7,10.53 7,11.14V15.5C7,16.3 7.73,17 8.5,17H15C15.39,17 15.74,16.84 16,16.57L16.5,16.16C16.5,16.16 17,15.78 17,15.36V13C17,13 17,11.86 16.13,11.3L17.71,2.2C17.83,1.66 17.5,1.13 16.94,1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHandPeaceVariant.svg',
  mixins: [icon]
};
</script>