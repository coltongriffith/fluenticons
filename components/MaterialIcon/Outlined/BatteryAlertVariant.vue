<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-battery-alert-variant-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14 20H6V6H14M14.67 4H13V2H7V4H5.33C4.6 4 4 4.6 4 5.33V20.67C4 21.4 4.6 22 5.33 22H14.67C15.4 22 16 21.4 16 20.67V5.33C16 4.6 15.4 4 14.67 4M21 7H19V13H21V8M21 15H19V17H21V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedBatteryAlertVariant',
  mixins: [icon]
};
</script>