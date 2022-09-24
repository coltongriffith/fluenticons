<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-smoke-detector-alert" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10 18C13.3 18 16 15.3 16 12C16 8.7 13.3 6 10 6C6.7 6 4 8.7 4 12C4 15.3 6.7 18 10 18M17 3C18.1 3 19 3.9 19 5V19C19 20.1 18.1 21 17 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3H17M6 12C6 9.8 7.8 8 10 8S14 9.8 14 12 12.2 16 10 16 6 14.2 6 12M23 7H21V13H23V8M23 15H21V17H23V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledSmokeDetectorAlert',
  mixins: [icon]
};
</script>