<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-tag-heart-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4,2A2,2 0 0,0 2,4V11C2,11.55 2.22,12.05 2.59,12.42L11.59,21.42C11.95,21.78 12.45,22 13,22C13.55,22 14.05,21.78 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.45 21.77,11.94 21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4V2M11,4L20,13L13,20L4,11V4H11V4H11M6.5,5A1.5,1.5 0 0,0 5,6.5A1.5,1.5 0 0,0 6.5,8A1.5,1.5 0 0,0 8,6.5A1.5,1.5 0 0,0 6.5,5M10.95,10.5C9.82,10.5 8.9,11.42 8.9,12.55C8.9,13.12 9.13,13.62 9.5,14L13,17.5L16.5,14C16.87,13.63 17.1,13.11 17.1,12.55A2.05,2.05 0 0,0 15.05,10.5C14.5,10.5 13.97,10.73 13.6,11.1L13,11.7L12.4,11.11C12.03,10.73 11.5,10.5 10.95,10.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedTagHeart',
  mixins: [icon]
};
</script>