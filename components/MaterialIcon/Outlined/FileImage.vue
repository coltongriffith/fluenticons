<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-image-outline" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M17,13V19H7L12,14L14,16M10,10.5A1.5,1.5 0 0,1 8.5,12A1.5,1.5 0 0,1 7,10.5A1.5,1.5 0 0,1 8.5,9A1.5,1.5 0 0,1 10,10.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedFileImage',
  mixins: [icon]
};
</script>