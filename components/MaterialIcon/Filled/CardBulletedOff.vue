<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-card-bulleted-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3.35,3.58L20.65,20.87L19.23,22.29L16.94,20H4A2,2 0 0,1 2,18V6C2,5.72 2.06,5.46 2.16,5.22L1.23,4.29L2.65,2.87L3.35,3.58M6.6,4H20A2,2 0 0,1 22,6V18C22,18.4 21.88,18.77 21.68,19.08L17.6,15H20V13H15.6L13.6,11H20V9H11.6L6.6,4M9.94,13H9V15H11V14.06L9.94,13M5.94,9H5V11H7V10.06L5.94,9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCardBulletedOff.svg',
  mixins: [icon]
};
</script>