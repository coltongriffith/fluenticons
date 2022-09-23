<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-monitor-cellphone-star" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23,11H18A1,1 0 0,0 17,12V21A1,1 0 0,0 18,22H23A1,1 0 0,0 24,21V12A1,1 0 0,0 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16A2,2 0 0,0 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2M11.97,9L11,6L10.03,9H7L9.47,10.76L8.53,13.67L11,11.87L13.47,13.67L12.53,10.76L15,9H11.97Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMonitorCellphoneStar.svg',
  mixins: [icon]
};
</script>