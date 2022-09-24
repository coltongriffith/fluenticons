<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-inbox-multiple-outline" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,3A2,2 0 0,1 21,5V12A2,2 0 0,1 19,14H5A2,2 0 0,1 3,12V5A2,2 0 0,1 5,3H19M5,10V12H9.4C8.8,11.47 8.34,10.78 8.13,10H5M19,12V10H15.87C15.66,10.78 15.2,11.47 14.6,12H19M19,8V5H5V8H10V9C10,10.07 10.93,11 12,11C13.07,11 14,10.07 14,9V8H19M21,19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V15H10V16C10,17.07 10.93,18 12,18C13.07,18 14,17.07 14,16V15H21V19M5,17V19H9.4C8.8,18.47 8.34,17.78 8.13,17H5M19,19V17H15.87C15.66,17.78 15.2,18.47 14.6,19H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedInboxMultiple',
  mixins: [icon]
};
</script>