<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-panorama-vertical" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5 12C18.5 8.1 19.3 5.1 19.9 3.3C20.1 2.7 19.7 2 19 2H5C4.3 2 3.8 2.7 4.1 3.3C4.7 5.4 5.5 8.1 5.5 12C5.5 15.9 4.7 18.7 4.1 20.7C3.8 21.3 4.3 22 5 22H19C19.7 22 20.2 21.3 20 20.7C19.3 18.7 18.5 15.9 18.5 12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledPanoramaVertical',
  mixins: [icon]
};
</script>