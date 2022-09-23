<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cards-playing-club" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2M14 15C13.4 15 12.9 14.7 12.5 14.3L13.5 17H10.5L11.5 14.3C11.1 14.7 10.6 15 10 15C8.9 15 8 14.1 8 13S8.9 11 10 11H10.3C10.1 10.7 10 10.3 10 10C10 8.9 10.9 8 12 8S14 8.9 14 10C14 10.4 13.9 10.7 13.7 11H14C15.1 11 16 11.9 16 13S15.1 15 14 15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCardsPlayingClub.svg',
  mixins: [icon]
};
</script>