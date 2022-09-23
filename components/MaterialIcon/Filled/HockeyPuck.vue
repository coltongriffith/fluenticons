<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-hockey-puck" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,5C6.5,5 2,6.57 2,8.5C2,10.43 6.5,12 12,12C17.5,12 22,10.43 22,8.5C22,6.57 17.5,5 12,5M2,11.76V16.5C2,18.43 6.5,20 12,20C17.5,20 22,18.43 22,16.5V11.76C21.33,12.22 20.58,12.57 19.73,12.86C17.62,13.6 14.95,14 12,14C9.05,14 6.38,13.6 4.27,12.86C3.42,12.57 2.67,12.22 2,11.76Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHockeyPuck.svg',
  mixins: [icon]
};
</script>