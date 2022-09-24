<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-shield-plus-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,20V22.97H17V20H14V18H17V15H19V18H22V20H19M21,11C21,11.9 20.9,12.78 20.71,13.65C20.13,13.35 19.5,13.15 18.81,13.05C18.93,12.45 19,11.83 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21L12.31,20.91C12.5,21.53 12.83,22.11 13.22,22.62L12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedShieldPlus',
  mixins: [icon]
};
</script>