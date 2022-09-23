<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cards-playing-heart-multiple-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 0H9C7.9 0 7 .9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 .9 20.1 0 19 0M19 18H9V2H19V18M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3M12.2 7C11 7 10 8 10 9.2C10 10.7 11.4 11.9 13.4 13.8L14 14.3L14.6 13.8C16.6 11.9 18 10.7 18 9.2C18 7.9 17 7 15.8 7C15.1 7 14.4 7.3 14 7.8C13.6 7.3 12.9 7 12.2 7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCardsPlayingHeartMultiple',
  mixins: [icon]
};
</script>