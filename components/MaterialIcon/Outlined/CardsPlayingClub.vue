<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cards-playing-club-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2M17 20H7V4H17V20M12 8C10.9 8 10 8.9 10 10C10 10.4 10.1 10.7 10.3 11H10C8.9 11 8 11.9 8 13S8.9 15 10 15C10.6 15 11.1 14.7 11.5 14.3L10.5 17H13.5L12.5 14.3C12.9 14.7 13.4 15 14 15C15.1 15 16 14.1 16 13S15.1 11 14 11H13.7C13.9 10.7 14 10.3 14 10C14 8.9 13.1 8 12 8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCardsPlayingClub',
  mixins: [icon]
};
</script>