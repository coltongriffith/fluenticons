<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-code-string" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M12.5,11H11.5A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 11.5,8H12.5A1.5,1.5 0 0,1 14,9.5H16A3.5,3.5 0 0,0 12.5,6H11.5A3.5,3.5 0 0,0 8,9.5A3.5,3.5 0 0,0 11.5,13H12.5A1.5,1.5 0 0,1 14,14.5A1.5,1.5 0 0,1 12.5,16H11.5A1.5,1.5 0 0,1 10,14.5H8A3.5,3.5 0 0,0 11.5,18H12.5A3.5,3.5 0 0,0 16,14.5A3.5,3.5 0 0,0 12.5,11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCodeString.svg',
  mixins: [icon]
};
</script>