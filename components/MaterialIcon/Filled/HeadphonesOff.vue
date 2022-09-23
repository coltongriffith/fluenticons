<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-headphones-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,1A9,9 0 0,1 21,10V17C21,17.62 20.81,18.19 20.5,18.67L15,13.18V12H19V10A7,7 0 0,0 12,3C10,3 8.23,3.82 6.96,5.14L5.55,3.72C7.18,2.04 9.47,1 12,1M2.78,3.5L20.5,21.22L19.23,22.5L16.73,20H15V18.27L9,12.27V20H6A3,3 0 0,1 3,17V10C3,8.89 3.2,7.82 3.57,6.84L1.5,4.77L2.78,3.5M5.17,8.44C5.06,8.94 5,9.46 5,10V12H8.73L5.17,8.44Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHeadphonesOff.svg',
  mixins: [icon]
};
</script>