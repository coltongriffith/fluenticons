<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-cancel" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M10.5,11C8,11 6,13 6,15.5C6,18 8,20 10.5,20C13,20 15,18 15,15.5C15,13 13,11 10.5,11M10.5,12.5A3,3 0 0,1 13.5,15.5C13.5,16.06 13.35,16.58 13.08,17L9,12.92C9.42,12.65 9.94,12.5 10.5,12.5M7.5,15.5C7.5,14.94 7.65,14.42 7.92,14L12,18.08C11.58,18.35 11.06,18.5 10.5,18.5A3,3 0 0,1 7.5,15.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledFileCancel',
  mixins: [icon]
};
</script>