<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-controller-classic-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.5,7A5.5,5.5 0 0,1 23,12.5A5.5,5.5 0 0,1 17.5,18C15.79,18 14.27,17.22 13.26,16H10.74C9.73,17.22 8.21,18 6.5,18A5.5,5.5 0 0,1 1,12.5A5.5,5.5 0 0,1 6.5,7H17.5M6.5,9A3.5,3.5 0 0,0 3,12.5A3.5,3.5 0 0,0 6.5,16C7.9,16 9.1,15.18 9.66,14H14.34C14.9,15.18 16.1,16 17.5,16A3.5,3.5 0 0,0 21,12.5A3.5,3.5 0 0,0 17.5,9H6.5M5.75,10.25H7.25V11.75H8.75V13.25H7.25V14.75H5.75V13.25H4.25V11.75H5.75V10.25M16.75,12.5A1,1 0 0,1 17.75,13.5A1,1 0 0,1 16.75,14.5A1,1 0 0,1 15.75,13.5A1,1 0 0,1 16.75,12.5M18.75,10.5A1,1 0 0,1 19.75,11.5A1,1 0 0,1 18.75,12.5A1,1 0 0,1 17.75,11.5A1,1 0 0,1 18.75,10.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedControllerClassic',
  mixins: [icon]
};
</script>