<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-badge-account-alert-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15,3H12V5H15V21H5V5H8V3H5A2,2 0 0,0 3,5V21A2,2 0 0,0 5,23H15A2,2 0 0,0 17,21V5A2,2 0 0,0 15,3M10,7A2,2 0 0,1 12,9A2,2 0 0,1 10,11A2,2 0 0,1 8,9A2,2 0 0,1 10,7M14,15H6V14C6,12.67 8.67,12 10,12C11.33,12 14,12.67 14,14V15M14,18H6V17H14V18M10,20H6V19H10V20M11,5H9V1H11V5M19,13V7H21V13H19M19,17V15H21V17H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedBadgeAccountAlert',
  mixins: [icon]
};
</script>