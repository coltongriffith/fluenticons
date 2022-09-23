<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-boom-gate-arrow-up" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.86,3C19.31,2.04 18.09,1.71 17.12,2.27L6.92,8.16C6.62,8.06 6.31,8 6,8A3,3 0 0,0 3,11V20A1,1 0 0,0 2,21V22H10V21A1,1 0 0,0 9,20V11.58L19.12,5.73C20.08,5.18 20.41,3.96 19.86,3M6,12.5A1.5,1.5 0 0,1 4.5,11A1.5,1.5 0 0,1 6,9.5A1.5,1.5 0 0,1 7.5,11A1.5,1.5 0 0,1 6,12.5M10.4,9.62L8.1,8.62L9.4,7.87L11.7,8.87L10.4,9.62M13.86,7.62L11.56,6.62L12.86,5.87L15.16,6.87L13.86,7.62M17.33,5.62L15.03,4.62L16.33,3.87L18.62,4.87L17.33,5.62M17,11L22,16H19V20H15V16H12L17,11" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBoomGateArrowUp.svg',
  mixins: [icon]
};
</script>