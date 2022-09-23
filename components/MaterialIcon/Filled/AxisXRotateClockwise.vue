<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-axis-x-rotate-clockwise" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,10H14.91C14.57,6.55 13.4,4 12,4C10.42,4 9.12,7.27 9,11.42L7,12.57V12C7,6.5 9.24,2 12,2C14.42,2 16.44,5.44 16.9,10H20L16,14L12,10M12,22C10.12,22 8.47,19.92 7.62,16.84L9.37,15.83C9.87,18.31 10.86,20 12,20C13.27,20 14.36,17.89 14.79,14.92L16,16.12L16.7,15.42C16,19.26 14.16,22 12,22M2.11,18.87L1.11,17.13L1.06,17.06L11.12,11.25L12.72,12.84L2.15,18.94L2.11,18.87M21.89,5.13L22.89,6.87L19.2,9H17.77L17.5,7.66L21.89,5.13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAxisXRotateClockwise.svg',
  mixins: [icon]
};
</script>