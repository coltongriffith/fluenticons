<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-flower-poppy" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5,12A3.5,3.5 0 0,0 22,8.5A6.5,6.5 0 0,0 15.5,2A3.5,3.5 0 0,0 12,5.5A3.5,3.5 0 0,0 8.5,2A6.5,6.5 0 0,0 2,8.5A3.5,3.5 0 0,0 5.5,12A3.5,3.5 0 0,0 2,15.5A6.5,6.5 0 0,0 8.5,22A3.5,3.5 0 0,0 12,18.5A3.5,3.5 0 0,0 15.5,22A6.5,6.5 0 0,0 22,15.5A3.5,3.5 0 0,0 18.5,12M12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16M14.5,12A2.5,2.5 0 0,1 12,14.5A2.5,2.5 0 0,1 9.5,12A2.5,2.5 0 0,1 12,9.5A2.5,2.5 0 0,1 14.5,12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFlowerPoppy.svg',
  mixins: [icon]
};
</script>