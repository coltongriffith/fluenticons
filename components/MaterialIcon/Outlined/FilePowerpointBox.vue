<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-powerpoint-box-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5M5 5H19V19H5V5M15.1 7.88C14.45 7.29 13.83 7 12.3 7H8V17H9.8V13.4H12.3C13.8 13.4 14.46 13.12 15.1 12.58C15.74 12.03 16 11.25 16 10.23C16 9.26 15.75 8.5 15.1 7.88M13.6 11.5C13.28 11.81 12.9 12 12.22 12H9.8V8.4H12.1C12.76 8.4 13.27 8.65 13.6 9C13.93 9.35 14.1 9.72 14.1 10.24C14.1 10.8 13.92 11.19 13.6 11.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFilePowerpointBox',
  mixins: [icon]
};
</script>