<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-microsoft-xbox-controller-battery-charging" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,5H21.67C22.4,5 23,5.6 23,6.33V19.67A1.33,1.33 0 0,1 21.67,21H14.33C13.6,21 13,20.4 13,19.67V16.75H7.75C5.75,16.75 5,19 3,20C1,20 -0.5,17 3.5,8.5H3.75L4.19,7.67C4.19,7.67 7,6 8.33,7.23H13V6.33A1.33,1.33 0 0,1 14.33,5H16V3H20V5M21,7H15V19H21V7M15.5,14L18.5,7.5V12H20.5L17.5,18.5V14H15.5M11,8A1,1 0 0,0 10,9A1,1 0 0,0 11,10A1,1 0 0,0 12,9A1,1 0 0,0 11,8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMicrosoftXboxControllerBatteryCharging.svg',
  mixins: [icon]
};
</script>