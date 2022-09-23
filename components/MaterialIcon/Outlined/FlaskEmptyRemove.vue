<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-flask-empty-remove-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15.46 15.88L16.88 14.46L19 16.59L21.12 14.47L22.53 15.88L20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.53L15.47 20.12L17.59 18L15.46 15.88M5 19C5 19.55 5.45 20 6 20H13.34C13.61 20.75 14 21.42 14.53 22H6C4.34 22 3 20.66 3 19C3 18.4 3.18 17.84 3.5 17.36L9 7.81V6C8.45 6 8 5.55 8 5V4C8 2.9 8.9 2 10 2H14C15.11 2 16 2.9 16 4V5C16 5.55 15.55 6 15 6V7.81L17.5 12.18C16.86 12.35 16.24 12.63 15.69 13L13 8.35V4H11V8.35L5.18 18.43C5.07 18.59 5 18.79 5 19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFlaskEmptyRemove',
  mixins: [icon]
};
</script>