<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-shovel-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.1,1.81L12.27,4.65C11.5,5.43 11.5,6.69 12.27,7.47L13.68,8.89L13,9.62L14.44,11.06L15.17,10.33L16.56,11.72C17.34,12.5 18.61,12.5 19.39,11.72L22.22,8.88L15.1,1.81M17.93,10.28L13.7,6.06L15.11,4.65L19.34,8.88L17.93,10.28M20.7,20.24L19.29,21.65L11.5,13.88L10.5,14.88L13.33,17.69L12,19.09C7,24 3.5,20.5 3.5,20.5C3.5,20.5 -0.06,17 4.89,12L6.31,10.6L9.13,13.43L10.13,12.43L2.35,4.68L3.77,3.26L20.7,20.24Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledShovelOff.svg',
  mixins: [icon]
};
</script>