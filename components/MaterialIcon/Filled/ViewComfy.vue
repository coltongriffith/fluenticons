<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-view-comfy" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,9H7V5H3V9M3,14H7V10H3V14M8,14H12V10H8V14M13,14H17V10H13V14M8,9H12V5H8V9M13,5V9H17V5H13M18,14H22V10H18V14M3,19H7V15H3V19M8,19H12V15H8V19M13,19H17V15H13V19M18,19H22V15H18V19M18,5V9H22V5H18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledViewComfy',
  mixins: [icon]
};
</script>