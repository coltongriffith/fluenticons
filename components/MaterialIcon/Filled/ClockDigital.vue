<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-clock-digital" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,6A2,2 0 0,0 0,8V16A2,2 0 0,0 2,18H22A2,2 0 0,0 24,16V8A2,2 0 0,0 22,6M2,8H22V16H2M3,9V10.5H6.25L3,15H4.75L8,10.5V9M9.25,9V10.5H10.75V9M12,9V10.5H13.5V15H15V9M17,9A1,1 0 0,0 16,10V14A1,1 0 0,0 17,15H20A1,1 0 0,0 21,14V10A1,1 0 0,0 20,9M17.5,10.5H19.5V13.5H17.5M9.25,13.5V15H10.75V13.5" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledClockDigital.svg',
  mixins: [icon]
};
</script>