<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-robot-mower-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1 14C1 16.76 3.24 19 6 19C7.64 19 9.09 18.21 10 17H15.17C15.58 18.17 16.7 19 18 19C19.31 19 20.42 18.17 20.83 17H23V15C23 9.5 18.5 5 13 5H1V14M21 15H10.9C10.97 14.68 11 14.34 11 14C11 11.24 8.76 9 6 9C4.87 9 3.84 9.37 3 10V7H12.5C15.1 7 17.42 8.16 19 10H15V12H20.25C20.67 12.92 20.92 13.94 21 15M6 11C7.66 11 9 12.34 9 14C9 15.66 7.66 17 6 17C4.34 17 3 15.66 3 14C3 12.34 4.34 11 6 11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedRobotMower',
  mixins: [icon]
};
</script>