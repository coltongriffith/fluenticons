<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-speaker-bluetooth" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4,3A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H12A2,2 0 0,0 14,19V5A2,2 0 0,0 12,3H4M8,5A2,2 0 0,1 10,7A2,2 0 0,1 8,9A2,2 0 0,1 6,7A2,2 0 0,1 8,5M19,7V10.79L16.71,8.5L16,9.21L18.79,12L16,14.79L16.71,15.5L19,13.21V17H19.5L22.35,14.14L20.21,12L22.35,9.85L19.5,7H19M20,8.91L20.94,9.85L20,10.79V8.91M8,11A4,4 0 0,1 12,15A4,4 0 0,1 8,19A4,4 0 0,1 4,15A4,4 0 0,1 8,11M8,13A2,2 0 0,0 6,15A2,2 0 0,0 8,17A2,2 0 0,0 10,15A2,2 0 0,0 8,13M20,13.21L20.94,14.14L20,15.08V13.21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSpeakerBluetooth.svg',
  mixins: [icon]
};
</script>