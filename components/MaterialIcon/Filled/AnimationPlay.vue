<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-animation-play" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4,2H14V4H4V14H2V4C2,2.89 2.89,2 4,2M8,6H18V8H8V18H6V8C6,6.89 6.89,6 8,6M12,10H20C21.11,10 22,10.89 22,12V20C22,21.11 21.11,22 20,22H12C10.89,22 10,21.11 10,20V12C10,10.89 10.89,10 12,10M14,12V20L20,16L14,12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAnimationPlay.svg',
  mixins: [icon]
};
</script>