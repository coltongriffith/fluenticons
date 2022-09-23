<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-paragliding" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 17C10.9 17 10 16.11 10 15S10.9 13 12 13 14 13.9 14 15 13.11 17 12 17M19 14H17C17 16.76 14.76 19 12 19S7 16.76 7 14H5C5 16.79 6.64 19.19 9 20.32V23H15V20.32C17.36 19.19 19 16.79 19 14M23 7.76C23.04 8.56 22.05 9.06 21.41 8.6C21.27 8.46 21.16 8.44 21 8.32L18.97 13H17L15.5 6.73C13.21 6.5 10.79 6.5 8.5 6.73L7 13H5.03L3 8.32C2.84 8.44 2.73 8.46 2.59 8.6C1.95 9.06 .959 8.56 1 7.76V4C1 4 1 1 12 1S23 4 23 4M6.9 7C6 7.2 5.15 7.43 4.37 7.71L5.87 11.27L6.9 7M19.63 7.71C18.85 7.43 18 7.2 17.1 7L18.13 11.27L19.63 7.71Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledParagliding.svg',
  mixins: [icon]
};
</script>