<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-email-check-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 19C13 18.66 13.04 18.33 13.09 18H4V8L12 13L20 8V13.09C20.72 13.21 21.39 13.46 22 13.81V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H13.09C13.04 19.67 13 19.34 13 19M20 6L12 11L4 6H20M17.75 22.16L15 19.16L16.16 18L17.75 19.59L21.34 16L22.5 17.41L17.75 22.16" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedEmailCheck',
  mixins: [icon]
};
</script>