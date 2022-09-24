<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pound-box" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M7,18H9L9.35,16H13.35L13,18H15L15.35,16H17.35L17.71,14H15.71L16.41,10H18.41L18.76,8H16.76L17.12,6H15.12L14.76,8H10.76L11.12,6H9.12L8.76,8H6.76L6.41,10H8.41L7.71,14H5.71L5.35,16H7.35L7,18M10.41,10H14.41L13.71,14H9.71L10.41,10Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledPoundBox',
  mixins: [icon]
};
</script>