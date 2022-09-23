<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-case-sensitive-alt" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,14C20,12.5 19.5,12 18,12H16V11C16,10 16,10 14,10V15.4L14,19H16L18,19C19.5,19 20,18.47 20,17V14M12,12C12,10.5 11.47,10 10,10H6C4.5,10 4,10.5 4,12V19H6V16H10V19H12V12M10,7H14V5H10V7M22,9V20C22,21.11 21.11,22 20,22H4A2,2 0 0,1 2,20V9C2,7.89 2.89,7 4,7H8V5L10,3H14L16,5V7H20A2,2 0 0,1 22,9H22M16,17H18V14H16V17M6,12H10V14H6V12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCaseSensitiveAlt.svg',
  mixins: [icon]
};
</script>