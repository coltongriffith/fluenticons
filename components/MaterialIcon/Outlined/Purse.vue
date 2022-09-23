<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-purse-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,11L20,19H4L5,11H19M14,3H10L8,5V9H4.7A1.65,1.65 0 0,0 3,10.5L2,19.1A1.74,1.74 0 0,0 3.7,21H20.3A1.74,1.74 0 0,0 22,19.1L21,10.5A1.65,1.65 0 0,0 19.3,9H16V5L14,3M10,9V5H14V9" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedPurse',
  mixins: [icon]
};
</script>