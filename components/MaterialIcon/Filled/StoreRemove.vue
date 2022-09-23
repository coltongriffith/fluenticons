<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-store-remove" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 4H20V6H4V4M15.46 16.88L16.88 15.46L19 17.59L21.12 15.47L22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.46 21.12L17.59 19L15.47 16.88M4 7H20L21 12V13.34C20.33 13.09 19.62 12.96 18.91 12.96C17.71 12.96 16.54 13.33 15.54 14H14V15.53C13.3 16.53 12.92 17.73 12.92 18.95L13 20H4V14H3V12L4 7M6 14V18H12V14H6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledStoreRemove.svg',
  mixins: [icon]
};
</script>