<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-earth-box" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H5M15.78,5H19V17.18C18.74,16.38 17.69,15.79 16.8,15.79H15.8V12.79A1,1 0 0,0 14.8,11.79H8.8V9.79H10.8A1,1 0 0,0 11.8,8.79V6.79H13.8C14.83,6.79 15.67,6 15.78,5M5,10.29L9.8,14.79V15.79C9.8,16.9 10.7,17.79 11.8,17.79V19H5V10.29Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEarthBox.svg',
  mixins: [icon]
};
</script>