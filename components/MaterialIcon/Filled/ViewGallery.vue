<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-view-gallery" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 3H2V16H21V3M2 17H6V21H2V17M7 17H11V21H7V17M12 17H16V21H12V17M17 17H21V21H17V17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledViewGallery',
  mixins: [icon]
};
</script>