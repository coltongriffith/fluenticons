<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-whistle-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3.76 3.7L2.14 4.88L4.43 8A8.23 8.23 0 0 1 6.35 7.28M11 9V11H18V11.29L13 12.71V15.5A4.5 4.5 0 1 1 8.5 11H9V9H8.5A6.5 6.5 0 1 0 15 15.5V13.91L22 12V9M16.24 3.7L13.85 7H16.32L17.86 4.88M9 2V7H11V2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedWhistle',
  mixins: [icon]
};
</script>