<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-volcano-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 8H11L9 13H6L2 22H22L18 8M7.3 15H10.35L10.85 13.74L12.35 10H16.5L19.35 20H5.08L7.3 15M13 1H15V5H13V1M16.12 5.47L18.95 2.64L20.36 4.05L17.54 6.88L16.12 5.47M7.64 4.05L9.05 2.64L11.88 5.46L10.47 6.88L7.64 4.05Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedVolcano',
  mixins: [icon]
};
</script>