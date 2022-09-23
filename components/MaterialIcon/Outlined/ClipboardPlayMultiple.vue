<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-clipboard-play-multiple-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4M20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.2C11.6 1.8 12.7 1 14 1C15.3 1 16.4 1.8 16.8 3H20M14 3C13.4 3 13 3.5 13 4C13 4.5 13.4 5 14 5C14.6 5 15 4.6 15 4C15 3.4 14.6 3 14 3M10 7V5H8V17H20V5H18V7M12 15V9L17 12" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedClipboardPlayMultiple',
  mixins: [icon]
};
</script>