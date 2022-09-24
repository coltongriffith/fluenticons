<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-map-marker-right-outline" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9 6.5C10.38 6.5 11.5 7.62 11.5 9S10.38 11.5 9 11.5 6.5 10.38 6.5 9 7.62 6.5 9 6.5M9 2C12.87 2 16 5.13 16 9C16 14.25 9 22 9 22S2 14.25 2 9C2 5.13 5.13 2 9 2M9 4C6.24 4 4 6.24 4 9C4 10 4 12 9 18.71C14 12 14 10 14 9C14 6.24 11.76 4 9 4M18 17L23 12L18 7V17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedMapMarkerRight',
  mixins: [icon]
};
</script>