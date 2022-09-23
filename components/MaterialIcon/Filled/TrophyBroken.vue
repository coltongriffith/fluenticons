<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-trophy-broken" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6.2 13C6.6 14.8 7.6 16.3 10 16.8V19.34C8 20.12 8 22 8 22H13.2L10.2 15L14.2 10L10.7 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2M6 11H4V4H6V11M17.8 13H20C21 13 22 12 22 11V2H18C17.1 2 16 3 16 4H13.9L16.7 10L12.2 15L13.2 22H16C16 22 16 20.12 14 19.34L14 16.85C16.39 16.35 17.5 14.7 17.8 13M20 11H18V4H20V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTrophyBroken.svg',
  mixins: [icon]
};
</script>