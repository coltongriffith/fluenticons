<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-tag-faces" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M15,18C11.68,18 9,15.31 9,12C9,8.68 11.68,6 15,6A6,6 0 0,1 21,12A6,6 0 0,1 15,18M4,13A1,1 0 0,1 3,12A1,1 0 0,1 4,11A1,1 0 0,1 5,12A1,1 0 0,1 4,13M22,3H7.63C6.97,3 6.38,3.32 6,3.81L0,12L6,20.18C6.38,20.68 6.97,21 7.63,21H22A2,2 0 0,0 24,19V5C24,3.89 23.1,3 22,3M13,11A1,1 0 0,0 14,10A1,1 0 0,0 13,9A1,1 0 0,0 12,10A1,1 0 0,0 13,11M15,16C16.86,16 18.35,14.72 18.8,13H11.2C11.65,14.72 13.14,16 15,16M17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTagFaces.svg',
  mixins: [icon]
};
</script>