<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-keyboard-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6,16H18V18H6V16M6,13V15H2V13H6M7,15V13H10V15H7M11,15V13H13V15H11M14,15V13H17V15H14M18,15V13H22V15H18M2,10H5V12H2V10M19,12V10H22V12H19M18,12H16V10H18V12M8,12H6V10H8V12M12,12H9V10H12V12M15,12H13V10H15V12M2,9V7H4V9H2M5,9V7H7V9H5M8,9V7H10V9H8M11,9V7H13V9H11M14,9V7H16V9H14M17,9V7H22V9H17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledKeyboardVariant.svg',
  mixins: [icon]
};
</script>