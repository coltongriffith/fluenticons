<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-camera-wireless-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,9V20H4V8H8.05L9.88,6H15V4H9L7.17,6H4A2,2 0 0,0 2,8V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V9H20M20.67,8H22C22,4.68 19.31,2 16,2V3.33C18.58,3.33 20.66,5.41 20.67,8M18,8H19.33C19.32,6.15 17.84,4.67 16,4.67V6C17.11,6 18,6.89 18,8M7,14A5,5 0 0,0 12,19A5,5 0 0,0 17,14A5,5 0 0,0 12,9A5,5 0 0,0 7,14M15,14A3,3 0 0,1 12,17A3,3 0 0,1 9,14A3,3 0 0,1 12,11A3,3 0 0,1 15,14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedCameraWireless',
  mixins: [icon]
};
</script>