<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hoop-house" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 5C6.5 5 2 9.5 2 15V21H22V15C22 9.5 17.5 5 12 5M12 7C14.53 7 16.78 8.17 18.25 10H5.76C7.22 8.17 9.47 7 12 7M8 19H4V15C4 13.94 4.21 12.93 4.58 12H8V19M14 19H10V12H14V19M20 19H16V12H19.42C19.79 12.93 20 13.94 20 15V19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHoopHouse.svg',
  mixins: [icon]
};
</script>