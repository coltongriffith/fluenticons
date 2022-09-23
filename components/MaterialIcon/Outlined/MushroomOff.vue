<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-mushroom-off-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.1 21.5L2.4 1.7L1.1 3L4.1 6C2.8 7.6 2 9.7 2 12C2 13.1 2.9 14 4 14H12.1L13.1 15H9L8 18.5L7.7 19.5C7.4 20.6 8.1 21.7 9.1 21.9L9.7 22H14.4C15.5 22 16.4 21.1 16.4 20L16.3 19.5L16 18.5L15.8 17.6L20.9 22.7L22.1 21.5M4 12C4 10.3 4.6 8.7 5.5 7.4L6.2 8.1C6.1 8.4 6 8.7 6 9C6 10.1 6.9 11 8 11C8.3 11 8.6 10.9 8.9 10.8L10.1 12H4M9.7 20L10 19L10.6 17H13.6L14.2 19L14.5 20H9.7M16 11C14.9 11 14 10.1 14 9S14.9 7 16 7 18 7.9 18 9 17.1 11 16 11M8.2 5L6.7 3.5C8.3 2.6 10.1 2 12 2C17.5 2 22 6.5 22 12C22 13.1 21.1 14 20 14H17.2L15.2 12H20C20 8.3 17.4 5.1 14 4.2C13.9 5.2 13 6 12 6S10.1 5.2 10 4.2C9.4 4.4 8.7 4.7 8.2 5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedMushroomOff',
  mixins: [icon]
};
</script>