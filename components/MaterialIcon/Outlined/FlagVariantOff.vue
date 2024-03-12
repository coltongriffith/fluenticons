<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-flag-variant-off-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L2.4 1.7L1.1 3L5 6.9V21H7V14C7 14 7.8 12.4 10.2 12.1L20.9 22.8L22.1 21.5M7 11.5V8.9L8.7 10.6C7.7 11 7 11.5 7 11.5M9.4 6.2L7.8 4.6C8.7 4.3 9.8 4 11 4C14 4 14 6 16 6C19 6 20 4 20 4V12C20 12 19.2 13.5 17.1 13.9L15 11.8C15.3 11.9 15.6 12 16 12C18 12 18 11 18 11V7.5C18 7.5 17 8 16 8C14 8 13 6 11 6C10.5 6 9.9 6.1 9.4 6.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedFlagVariantOff',
  mixins: [icon]
};
</script>