<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-find-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M6,4H13L18,9V17.58L16.16,15.74C17.44,13.8 17.23,11.17 15.5,9.46C14.55,8.5 13.28,8 12,8C10.72,8 9.45,8.5 8.47,9.46C6.5,11.41 6.5,14.57 8.47,16.5C9.44,17.5 10.72,17.97 12,17.97C12.96,17.97 13.92,17.69 14.75,17.14L17.6,20H6V4M14.11,15.1C13.55,15.66 12.8,16 12,16C11.2,16 10.45,15.67 9.89,15.1C9.33,14.54 9,13.79 9,13C9,12.19 9.32,11.44 9.89,10.88C10.45,10.31 11.2,10 12,10C12.8,10 13.55,10.31 14.11,10.88C14.67,11.44 15,12.19 15,13C15,13.79 14.68,14.54 14.11,15.1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedFileFind',
  mixins: [icon]
};
</script>