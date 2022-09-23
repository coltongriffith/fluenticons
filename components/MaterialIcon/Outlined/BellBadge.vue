<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bell-badge-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 17V11.8C18.5 11.9 18 12 17.5 12H17V18H7V11C7 8.2 9.2 6 12 6C12.1 4.7 12.7 3.6 13.5 2.7C13.2 2.3 12.6 2 12 2C10.9 2 10 2.9 10 4V4.3C7 5.2 5 7.9 5 11V17L3 19V20H21V19L19 17M10 21C10 22.1 10.9 23 12 23S14 22.1 14 21H10M21 6.5C21 8.4 19.4 10 17.5 10S14 8.4 14 6.5 15.6 3 17.5 3 21 4.6 21 6.5" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedBellBadge',
  mixins: [icon]
};
</script>