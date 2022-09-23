<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-kickstarter" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.3 10.2L17.5 12L19.3 13.8C21.19 15.67 21.19 18.72 19.3 20.59C17.42 22.46 14.35 22.46 12.47 20.59L11.8 19.93C10.93 21.19 9.5 22 7.83 22C5.16 22 3 19.85 3 17.2V6.8C3 4.15 5.16 2 7.83 2C9.5 2 10.93 2.82 11.8 4.07L12.47 3.41C14.35 1.54 17.42 1.54 19.3 3.41C21.19 5.28 21.19 8.33 19.3 10.2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledKickstarter.svg',
  mixins: [icon]
};
</script>