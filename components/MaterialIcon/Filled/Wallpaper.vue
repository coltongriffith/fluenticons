<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-wallpaper" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4,4H11V2H4A2,2 0 0,0 2,4V11H4V4M10,13L6,18H18L15,14L12.97,16.71L10,13M17,8.5A1.5,1.5 0 0,0 15.5,7A1.5,1.5 0 0,0 14,8.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5M20,2H13V4H20V11H22V4A2,2 0 0,0 20,2M20,20H13V22H20A2,2 0 0,0 22,20V13H20V20M4,13H2V20A2,2 0 0,0 4,22H11V20H4V13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledWallpaper.svg',
  mixins: [icon]
};
</script>