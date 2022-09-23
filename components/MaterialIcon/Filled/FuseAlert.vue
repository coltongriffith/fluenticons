<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-fuse-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 7V17H13V7H6M9.16 16V12.87H7.41L9.91 8V11.14H11.59L9.16 16M14 2V6H5V2C5 1.45 5.45 1 6 1H13C13.55 1 14 1.45 14 2M14 18V22C14 22.55 13.55 23 13 23H6C5.45 23 5 22.55 5 22V18H14M19 13H17V7H19V13M19 17H17V15H19V17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFuseAlert.svg',
  mixins: [icon]
};
</script>