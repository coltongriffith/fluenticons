<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-delete-restore" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,14H16L12,10L8,14H10V18H14V14M6,7H18V19C18,19.5 17.8,20 17.39,20.39C17,20.8 16.5,21 16,21H8C7.5,21 7,20.8 6.61,20.39C6.2,20 6,19.5 6,19V7M19,4V6H5V4H8.5L9.5,3H14.5L15.5,4H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDeleteRestore.svg',
  mixins: [icon]
};
</script>