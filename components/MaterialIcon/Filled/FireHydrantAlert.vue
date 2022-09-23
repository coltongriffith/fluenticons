<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fire-hydrant-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22 7H20V13H22V7M22 15H20V17H22V15M3 15V14H2V12H3V11H5V15H3M17 12V11H15V15H17V14H18V12H17M16 6H13.86C13.5 4.6 12.4 3.5 11 3.14V2H9V3.14C7.6 3.5 6.5 4.6 6.14 6H4V8H16V6M16 22H4C4 20.9 4.89 20 6 20V9H14V20C15.11 20 16 20.9 16 22M8 13C8 14.11 8.9 15 10 15S12 14.11 12 13 11.11 11 10 11 8 11.9 8 13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFireHydrantAlert.svg',
  mixins: [icon]
};
</script>