<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-clipboard-text-play" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19,3A2,2 0 0,1 21,5V13.34C20.36,13.11 19.68,13 19,13C15.68,13 13,15.69 13,19C13,19.68 13.11,20.36 13.34,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.5,2.16 10.14,1.5 11,1.2C12.53,0.64 14.25,1.44 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M11,17V15H7V17H11M13,13V11H7V13H13M17,9V7H7V9H17M17,16L22,19L17,22V16Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledClipboardTextPlay.svg',
  mixins: [icon]
};
</script>