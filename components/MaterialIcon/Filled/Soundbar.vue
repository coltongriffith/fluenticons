<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-soundbar" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 8C2.9 8 2 8.9 2 10V14C2 15.11 2.9 16 4 16H20C21.11 16 22 15.11 22 14V10C22 8.9 21.11 8 20 8M9 10C10.11 10 11 10.9 11 12C11 13.11 10.11 14 9 14C7.9 14 7 13.11 7 12C7 10.9 7.9 10 9 10M15 10C16.11 10 17 10.9 17 12C17 13.11 16.11 14 15 14C13.9 14 13 13.11 13 12C13 10.9 13.9 10 15 10M5 11C5.55 11 6 11.45 6 12C6 12.55 5.55 13 5 13C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11M9 11C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13C9.55 13 10 12.55 10 12C10 11.45 9.55 11 9 11M15 11C14.45 11 14 11.45 14 12C14 12.55 14.45 13 15 13C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11M19 11C19.55 11 20 11.45 20 12C20 12.55 19.55 13 19 13C18.45 13 18 12.55 18 12C18 11.45 18.45 11 19 11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSoundbar.svg',
  mixins: [icon]
};
</script>