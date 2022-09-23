<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-caps-lock" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.96,13.71L12,8.29L14.03,13.72M11.14,6L6.43,18H8.36L9.32,15.43H14.68L15.64,18H17.57L12.86,6H11.14M20,2H4C2.89,2 2,2.89 2,4V20C2,21.11 2.9,22 4,22H20C21.11,22 22,21.11 22,20V4C22,2.89 21.1,2 20,2M20,20H4V4H20V20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCapsLock.svg',
  mixins: [icon]
};
</script>