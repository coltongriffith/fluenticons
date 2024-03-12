<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-thought-bubble" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3.5,19A1.5,1.5 0 0,1 5,20.5A1.5,1.5 0 0,1 3.5,22A1.5,1.5 0 0,1 2,20.5A1.5,1.5 0 0,1 3.5,19M8.5,16A2.5,2.5 0 0,1 11,18.5A2.5,2.5 0 0,1 8.5,21A2.5,2.5 0 0,1 6,18.5A2.5,2.5 0 0,1 8.5,16M14.5,15C13.31,15 12.23,14.5 11.5,13.65C10.77,14.5 9.69,15 8.5,15C6.54,15 4.91,13.59 4.57,11.74C3.07,11.16 2,9.7 2,8A4,4 0 0,1 6,4C6.26,4 6.5,4.03 6.77,4.07C7.5,3.41 8.45,3 9.5,3C10.69,3 11.77,3.5 12.5,4.35C13.23,3.5 14.31,3 15.5,3C17.46,3 19.09,4.41 19.43,6.26C20.93,6.84 22,8.3 22,10A4,4 0 0,1 18,14L17.23,13.93C16.5,14.59 15.55,15 14.5,15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledThoughtBubble',
  mixins: [icon]
};
</script>