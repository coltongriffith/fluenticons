<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-view-agenda" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 3H3C2.4 3 2 3.4 2 4V10C2 10.6 2.4 11 3 11H21C21.6 11 22 10.6 22 10V4C22 3.4 21.6 3 21 3M21 13H3C2.4 13 2 13.4 2 14V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20V14C22 13.4 21.6 13 21 13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledViewAgenda.svg',
  mixins: [icon]
};
</script>