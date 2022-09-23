<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-railroad-light" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.67,10.5C16.4,10.5 15.27,11.3 14.85,12.5H13.17V7.77L16.66,9.86L17.66,8.14L14.11,6L17.68,3.86L16.68,2.14L13.17,4.23V2H11.17V4.23L7.68,2.14L6.68,3.86L10.23,6L6.66,8.14L7.66,9.86L11.17,7.77V12.5H9.5C8.36,9.32 3.66,10.13 3.66,13.5C3.66,16.87 8.36,17.68 9.5,14.5H11.17V20A2,2 0 0,0 9.17,22H15.17A2,2 0 0,0 13.17,20V14.5H14.85C15.66,16.8 18.73,17.22 20.13,15.23C21.53,13.24 20.1,10.5 17.67,10.5M6.67,14.5C5.78,14.5 5.33,13.42 5.96,12.79C6.59,12.16 7.67,12.61 7.67,13.5A1,1 0 0,1 6.67,14.5M17.67,14.5C16.78,14.5 16.33,13.42 16.96,12.79C17.59,12.16 18.67,12.61 18.67,13.5A1,1 0 0,1 17.67,14.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRailroadLight.svg',
  mixins: [icon]
};
</script>