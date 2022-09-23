<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-message-bulleted-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M1.27,1.73L0,3L2,5V22L6,18H15L20.73,23.73L22,22.46L1.27,1.73M8,14H6V12H8V14M6,11V9L8,11H6M20,2H4.08L10,7.92V6H18V8H10.08L11.08,9H18V11H13.08L20.07,18C21.14,17.95 22,17.08 22,16V4A2,2 0 0,0 20,2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledMessageBulletedOff.svg',
  mixins: [icon]
};
</script>