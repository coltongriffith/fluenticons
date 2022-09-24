<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sticker-plus" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M13 16H11V13H8V11H11V8H13V11H16V13H13V16M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledStickerPlus',
  mixins: [icon]
};
</script>