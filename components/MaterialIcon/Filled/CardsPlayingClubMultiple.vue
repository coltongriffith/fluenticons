<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cards-playing-club-multiple" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3M19 0H9C7.9 0 7 .9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 .9 20.1 0 19 0M16 13C15.4 13 14.9 12.7 14.5 12.3L15.5 15H12.5L13.5 12.3C13.1 12.7 12.6 13 12 13C10.9 13 10 12.1 10 11S10.9 9 12 9H12.3C12.1 8.7 12 8.4 12 8C12 6.9 12.9 6 14 6S16 6.9 16 8C16 8.4 15.9 8.7 15.7 9H16C17.1 9 18 9.9 18 11S17.1 13 16 13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCardsPlayingClubMultiple.svg',
  mixins: [icon]
};
</script>