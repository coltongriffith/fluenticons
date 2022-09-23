<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-projector-screen-variant-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.11 21.46L2.39 1.73L1.11 3L4.11 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H16.11L20.84 22.73L22.11 21.46M7 16V9H7.11L14.11 16H7M12.2 9L9.2 6H20C20.55 6 21 6.45 21 7V8C21 8.55 20.55 9 20 9H19V15.8L17 13.8V9H12.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedProjectorScreenVariantOff',
  mixins: [icon]
};
</script>