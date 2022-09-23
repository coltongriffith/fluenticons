<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-monitor-lock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.5,13A2.5,2.5 0 0,1 23,15.5V16A1,1 0 0,1 24,17V21A1,1 0 0,1 23,22H18A1,1 0 0,1 17,21V17A1,1 0 0,1 18,16V15.5A2.5,2.5 0 0,1 20.5,13M20.5,14A1.5,1.5 0 0,0 19,15.5V16H22V15.5A1.5,1.5 0 0,0 20.5,14M20,4H2V16H15V18H13V20H15V22H7V20H9V18H2C0.89,18 0,17.1 0,16V4C0,2.89 0.89,2 2,2H20A2,2 0 0,1 22,4V11.53C21.41,11.19 20.73,11 20,11V4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMonitorLock.svg',
  mixins: [icon]
};
</script>