<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-shield-lock-open-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 11C21 16.5 17.2 21.7 12 23C6.8 21.7 3 16.5 3 11V5L12 1L21 5V11M12 21C15.8 20 19 15.5 19 11.2V6.3L12 3.2L5 6.3V11.2C5 15.5 8.2 20 12 21M14.8 11H10.5V8.5C10.5 7.7 11.2 7.2 12 7.2S13.5 7.7 13.5 8.5V9H14.8V8.5C14.8 7.1 13.4 6 12 6S9.2 7.1 9.2 8.5V11C8.6 11 8 11.6 8 12.2V15.7C8 16.4 8.6 17 9.2 17H14.7C15.4 17 16 16.4 16 15.8V12.3C16 11.6 15.4 11 14.8 11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedShieldLockOpen',
  mixins: [icon]
};
</script>