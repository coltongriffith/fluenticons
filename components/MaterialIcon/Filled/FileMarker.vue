<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-marker" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5 10C19 10 19.5 10.08 20 10.22V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H15.91C14.7 20.41 13 17.78 13 15.5C13 12.5 15.5 10 18.5 10M13 3.5L18.5 9H13V3.5M18.5 12C16.6 12 15 13.6 15 15.5C15 18.1 18.5 22 18.5 22S22 18.1 22 15.5C22 13.6 20.4 12 18.5 12M18.5 16.8C17.8 16.8 17.3 16.2 17.3 15.6C17.3 14.9 17.9 14.4 18.5 14.4S19.7 15 19.7 15.6C19.8 16.2 19.2 16.8 18.5 16.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFileMarker.svg',
  mixins: [icon]
};
</script>