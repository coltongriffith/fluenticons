<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-middleware-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23 12L19 8V11H15.86C15.41 9.28 13.86 8 12 8S8.59 9.28 8.14 11H5L2 8V16L5 13H8.14C8.59 14.72 10.14 16 12 16S15.41 14.72 15.86 13H19V16L23 12M12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10S14 10.9 14 12C14 13.1 13.1 14 12 14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedMiddleware',
  mixins: [icon]
};
</script>