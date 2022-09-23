<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bus-marker" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 2C7.58 2 4 2.5 4 6V16A3 3 0 0 0 5 18.22V20A1 1 0 0 0 6 21H7A1 1 0 0 0 8 20V19H14A8 8 0 0 1 13 15.5A5.55 5.55 0 0 1 15.38 11H6V6H18V10A4.07 4.07 0 0 1 18.5 10A5.34 5.34 0 0 1 20 10.22V6C20 2.5 16.42 2 12 2M7.5 14A1.5 1.5 0 1 1 6 15.5A1.5 1.5 0 0 1 7.5 14M18.5 12A3.54 3.54 0 0 0 15 15.5C15 18.1 18.5 22 18.5 22S22 18.1 22 15.5A3.54 3.54 0 0 0 18.5 12M18.5 16.8A1.2 1.2 0 1 1 18.5 14.4A1.29 1.29 0 0 1 19.7 15.6A1.15 1.15 0 0 1 18.5 16.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBusMarker.svg',
  mixins: [icon]
};
</script>