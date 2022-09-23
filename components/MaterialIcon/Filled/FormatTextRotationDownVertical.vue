<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-format-text-rotation-down-vertical" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.25 4H13.75L9 15H11.1L12 12.8H17L17.9 15H20L15.25 4M12.63 11L14.5 6L16.37 11H12.63M5 17.5L8 14.5H6V2H4V14.5H2L5 17.5M22 20L19 17V19H6.5V21H19V23L22 20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFormatTextRotationDownVertical.svg',
  mixins: [icon]
};
</script>