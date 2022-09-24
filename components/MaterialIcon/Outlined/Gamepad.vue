<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-gamepad-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M7.5 9H2V15H7.5L10.5 12L7.5 9M6 13H4V11H6V13M15 7.5V2H9V7.5L12 10.5L15 7.5M11 4H13V6H11V4M9 16.5V22H15V16.5L12 13.5L9 16.5M13 20H11V18H13V20M16.5 9L13.5 12L16.5 15H22V9H16.5M20 13H18V11H20V13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedGamepad',
  mixins: [icon]
};
</script>