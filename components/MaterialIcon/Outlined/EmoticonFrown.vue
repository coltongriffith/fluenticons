<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-emoticon-frown-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 2C6.47 2 2 6.5 2 12S6.47 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12 20C7.58 20 4 16.42 4 12S7.58 4 12 4 20 7.58 20 12 16.42 20 12 20M15.5 11C16.33 11 17 10.33 17 9.5S16.33 8 15.5 8 14 8.67 14 9.5 14.67 11 15.5 11M8.5 11C9.33 11 10 10.33 10 9.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedEmoticonFrown',
  mixins: [icon]
};
</script>