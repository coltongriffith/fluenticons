<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-audio-input-rca" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 6V12H5V6H7V2C7 1.45 7.45 1 8 1S9 1.45 9 2V6H11M5 14V16C5 17.3 5.84 18.4 7 18.82V23H9V18.82C10.16 18.4 11 17.3 11 16V14H5M17 6V2C17 1.45 16.55 1 16 1S15 1.45 15 2V6H13V12H19V6H17M13 14V16C13 17.3 13.84 18.4 15 18.82V23H17V18.82C18.16 18.4 19 17.3 19 16V14H13Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAudioInputRca.svg',
  mixins: [icon]
};
</script>