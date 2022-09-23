<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cactus" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,16V21H10V18H9A3,3 0 0,1 6,15V12A1,1 0 0,1 7,11A1,1 0 0,1 8,12V15C8,15.56 8.45,16 9,16H10V6A2,2 0 0,1 12,4A2,2 0 0,1 14,6V14H15A1,1 0 0,0 16,13V11A1,1 0 0,1 17,10A1,1 0 0,1 18,11V13A3,3 0 0,1 15,16H14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCactus.svg',
  mixins: [icon]
};
</script>