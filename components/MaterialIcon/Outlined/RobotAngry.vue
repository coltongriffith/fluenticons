<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-robot-angry-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2S10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14M21 17H19V20H5V17H3V16H5V14C5 11.24 7.24 9 10 9H14C16.76 9 19 11.24 19 14V16H21V17M17.5 15.5C17.5 16.61 16.61 17.5 15.5 17.5C14.53 17.5 13.73 16.81 13.54 15.9L16.5 13.78C17.1 14.13 17.5 14.76 17.5 15.5M7.5 13.78L10.46 15.9C10.28 16.81 9.47 17.5 8.5 17.5C7.4 17.5 6.5 16.61 6.5 15.5C6.5 14.76 6.9 14.13 7.5 13.78Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedRobotAngry',
  mixins: [icon]
};
</script>