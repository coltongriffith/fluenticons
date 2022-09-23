<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fridge-variant-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7.2 4L5.7 2.5C6.05 2.19 6.5 2 7 2H17C18.11 2 19 2.9 19 4V15.8L17 13.8V4H13V9.8L11 7.8V4H7.2M22.11 21.46L20.84 22.73L18.46 20.35C18.1 20.75 17.58 21 17 21V22H15V21H9V22H7V21C5.9 21 5 20.11 5 19V6.89L1.11 3L2.39 1.73L22.11 21.46M7 10H8.11L7 8.89V10M11 12.89L10 11.89V14H7V19H11V12.89M17 18.89L13 14.89V19H17V18.89Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFridgeVariantOff',
  mixins: [icon]
};
</script>