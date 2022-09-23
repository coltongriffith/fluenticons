<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-credit-card-scan-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2,4H6V2H2A2,2 0 0,0 0,4V8H2V4M22,2H18V4H22V8H24V4A2,2 0 0,0 22,2M2,16H0V20A2,2 0 0,0 2,22H6V20H2V16M22,20H18V22H22A2,2 0 0,0 24,20V16H22V20M4,8V16A2,2 0 0,0 6,18H18A2,2 0 0,0 20,16V8A2,2 0 0,0 18,6H6A2,2 0 0,0 4,8M6,16V12H18V16H6M18,8V10H6V8H18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCreditCardScan',
  mixins: [icon]
};
</script>