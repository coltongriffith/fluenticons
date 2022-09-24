<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-close-box-multiple-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H8V4H20V16M4 6V20H18V22H4C2.9 22 2 21.11 2 20V6H4M9.77 12.84L12.6 10L9.77 7.15L11.17 5.75L14 8.6L16.84 5.77L18.24 7.17L15.4 10L18.23 12.84L16.83 14.24L14 11.4L11.17 14.24L9.77 12.84Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedCloseBoxMultiple',
  mixins: [icon]
};
</script>