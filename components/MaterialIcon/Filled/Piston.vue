<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-piston" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13,16.18C13.5,16.35 13.9,16.63 14.23,17H15V21H14.21C13.89,21.35 13.5,21.63 13,21.8C11.85,22.22 10.58,21.87 9.78,21H9V17H9.77C10.1,16.63 10.5,16.35 11,16.18V12H13V16.18M12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20M17,4H15V5H17V11H7V5H9V4H7V2H17V4M12,9A1,1 0 0,0 13,8A1,1 0 0,0 12,7A1,1 0 0,0 11,8A1,1 0 0,0 12,9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPiston.svg',
  mixins: [icon]
};
</script>