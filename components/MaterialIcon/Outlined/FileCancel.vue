<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-cancel-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M11.5,10C14,10 16,12 16,14.5C16,17 14,19 11.5,19C9,19 7,17 7,14.5C7,12 9,10 11.5,10M11.5,11.5C10.94,11.5 10.42,11.65 10,11.92L14.08,16C14.35,15.58 14.5,15.06 14.5,14.5A3,3 0 0,0 11.5,11.5M8.5,14.5A3,3 0 0,0 11.5,17.5C12.06,17.5 12.58,17.35 13,17.08L8.92,13C8.65,13.42 8.5,13.94 8.5,14.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedFileCancel',
  mixins: [icon]
};
</script>