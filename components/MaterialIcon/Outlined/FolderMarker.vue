<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-folder-marker-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18.5 12C20.4 12 22 13.6 22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12M18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8M20 8H4V18H13.5C13.79 18.68 14.13 19.35 14.5 20H4C2.89 20 2 19.1 2 18L2 6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V11.34C21.42 10.84 20.74 10.45 20 10.23V8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFolderMarker',
  mixins: [icon]
};
</script>