<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fridge-variant-alert-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15 2H5C3.9 2 3 2.9 3 4V19C3 20.11 3.9 21 5 21V22H7V21H13V22H15V21C16.11 21 17 20.11 17 19V4C17 2.9 16.11 2 15 2M9 19H5V14H8V10H5V4H9V19M15 19H11V4H15V19M19 15H21V17H19V15M21 7V13H19V7H21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFridgeVariantAlert',
  mixins: [icon]
};
</script>