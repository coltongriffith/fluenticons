<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fast-forward-45" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11.5 3C14.1 3 16.5 4 18.4 5.6L21 3V10H14L16.6 7.4C15.2 6.2 13.4 5.5 11.5 5.5C8 5.5 4.9 7.8 3.9 11L1.5 10.2C2.9 6 6.8 3 11.5 3M13 12H19V14H15V16H17C18.1 16 19 16.9 19 18V20C19 21.1 18.1 22 17 22H13V20H17V18H13V12M5 12V18H9V22H11V12H9V16H7V12H5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFastForward45.svg',
  mixins: [icon]
};
</script>