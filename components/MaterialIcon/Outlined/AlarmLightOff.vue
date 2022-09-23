<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-alarm-light-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10.5 7.3L9 5.8C9.9 5.3 10.9 5 12 5C15.3 5 18 7.7 18 11V14.8L16 12.8V11C16 8.8 14.2 7 12 7C11.5 7 11 7.1 10.5 7.3M20.1 4.8L18.7 3.4L16.6 5.5L18 6.9L20.1 4.8M19.5 10.5V12.5H22.5V10.5H19.5M4.5 10.5H1.5V12.5H4.5V10.5M2.4 1.7L22.1 21.4L20.8 22.7L20.1 22H4C4 20.9 4.9 20 6 20H18.1L17.1 19H6V11C6 10.1 6.2 9.2 6.6 8.5L1.1 3L2.4 1.7M8 17H15.1L8.1 10C8.1 10.3 8 10.7 8 11V17M13 1H11V4H13V1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedAlarmLightOff',
  mixins: [icon]
};
</script>