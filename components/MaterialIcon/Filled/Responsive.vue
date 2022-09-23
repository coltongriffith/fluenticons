<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-responsive" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledResponsive.svg',
  mixins: [icon]
};
</script>