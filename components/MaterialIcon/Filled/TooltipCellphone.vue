<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-tooltip-cellphone" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 6H15V14H9V6M22 4V16C22 17.11 21.11 18 20 18H16L12 22L8 18H4C2.9 18 2 17.11 2 16V4C2 2.9 2.9 2 4 2H20C21.11 2 22 2.9 22 4M16 5.09C16 4.5 15.5 4 14.86 4H9.14C8.5 4 8 4.5 8 5.09V14.91C8 15.5 8.5 16 9.14 16H14.86C15.5 16 16 15.5 16 14.91V5.09Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTooltipCellphone.svg',
  mixins: [icon]
};
</script>