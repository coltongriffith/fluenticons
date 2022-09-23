<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-video-input-svideo" viewBox="0 0 24 24">
    <linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="`rotate(${angle})`"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8,11.5A1.5,1.5 0 0,0 6.5,10A1.5,1.5 0 0,0 5,11.5A1.5,1.5 0 0,0 6.5,13A1.5,1.5 0 0,0 8,11.5M15,6.5A1.5,1.5 0 0,0 13.5,5H10.5A1.5,1.5 0 0,0 9,6.5A1.5,1.5 0 0,0 10.5,8H13.5A1.5,1.5 0 0,0 15,6.5M8.5,15A1.5,1.5 0 0,0 7,16.5A1.5,1.5 0 0,0 8.5,18A1.5,1.5 0 0,0 10,16.5A1.5,1.5 0 0,0 8.5,15M12,1A11,11 0 0,0 1,12A11,11 0 0,0 12,23A11,11 0 0,0 23,12A11,11 0 0,0 12,1M12,21C7.04,21 3,16.96 3,12C3,7.04 7.04,3 12,3C16.96,3 21,7.04 21,12C21,16.96 16.96,21 12,21M17.5,10A1.5,1.5 0 0,0 16,11.5A1.5,1.5 0 0,0 17.5,13A1.5,1.5 0 0,0 19,11.5A1.5,1.5 0 0,0 17.5,10M15.5,15A1.5,1.5 0 0,0 14,16.5A1.5,1.5 0 0,0 15.5,18A1.5,1.5 0 0,0 17,16.5A1.5,1.5 0 0,0 15.5,15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledVideoInputSvideo.svg',
  mixins: [icon]
};
</script>