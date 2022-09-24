<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-wall-sconce-round-variant" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 5V8H13V5H11M4.91 7.5L3.5 8.91L5.27 10.68L6.68 9.27L4.91 7.5M19.09 7.5L17.32 9.27L18.73 10.68L20.5 8.91L19.09 7.5M4 12C4 14.86 5.5 17.5 8 18.93S13.5 20.36 16 18.93 20 14.86 20 12H4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledWallSconceRoundVariant',
  mixins: [icon]
};
</script>