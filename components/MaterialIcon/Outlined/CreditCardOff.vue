<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-credit-card-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M0.93,4.2L2.21,2.93L20,20.72L18.73,22L16.73,20H4C2.89,20 2,19.1 2,18V6C2,5.78 2.04,5.57 2.11,5.38L0.93,4.2M20,8V6H7.82L5.82,4H20A2,2 0 0,1 22,6V18C22,18.6 21.74,19.13 21.32,19.5L19.82,18H20V12H13.82L9.82,8H20M4,8H4.73L4,7.27V8M4,12V18H14.73L8.73,12H4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCreditCardOff',
  mixins: [icon]
};
</script>