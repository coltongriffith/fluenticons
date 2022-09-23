<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-circular-saw" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13,11A1,1 0 0,1 14,12A1,1 0 0,1 13,13A1,1 0 0,1 12,12A1,1 0 0,1 13,11M7.86,6.25C9.14,4.87 10.97,4 13,4C16.5,4 19.44,6.61 19.93,10H22V12H16A3,3 0 0,0 13,9A3,3 0 0,0 10,12H2V10H2.05C2.25,7.73 3.14,5.66 4.5,4L7.86,6.25M6.73,7.89L5.06,6.77C4.53,7.75 4.18,8.84 4.06,10H6.07C6.18,9.25 6.4,8.54 6.73,7.89M7.4,15.4L6,14H11.79C12.03,14.42 12.5,14.7 13,14.7C13.5,14.7 13.97,14.42 14.21,14H20V15.4C18.39,14.42 18.46,15.75 18.46,15.75V17.71L16.5,19.67C16,17.92 15.1,18.9 15.1,18.9L13.7,20.3H10.9C11.88,18.69 10.55,18.76 10.55,18.76H8.59L6.63,16.8C8.38,16.31 7.4,15.4 7.4,15.4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCircularSaw.svg',
  mixins: [icon]
};
</script>