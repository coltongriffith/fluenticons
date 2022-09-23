<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-select-marker" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 3H5V5H3V4C3 3.45 3.45 3 4 3M20 3C20.55 3 21 3.45 21 4V5H19V3H20M15 5V3H17V5H15M11 5V3H13V5H11M7 5V3H9V5H7M11 21V19H13V21H11M7 21V19H9V21H7M4 21C3.45 21 3 20.55 3 20V19H5V21H4M3 15H5V17H3V15M3 11H5V13H3V11M3 7H5V9H3V7M21 7V9H19V7H21M19.5 13C21.4 13 23 14.6 23 16.5C23 19.1 19.5 23 19.5 23C19.5 23 16 19.1 16 16.5C16 14.6 17.6 13 19.5 13M19.5 17.8C20.2 17.8 20.8 17.2 20.7 16.6C20.7 16 20.1 15.4 19.5 15.4C18.9 15.4 18.3 15.9 18.3 16.6C18.3 17.2 18.8 17.8 19.5 17.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSelectMarker.svg',
  mixins: [icon]
};
</script>