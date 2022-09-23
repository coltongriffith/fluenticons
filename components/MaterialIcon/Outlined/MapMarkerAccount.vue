<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-map-marker-account-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 4C14.8 4 17 6.2 17 9C17 11.9 14.1 16.2 12 18.9C9.9 16.2 7 11.9 7 9C7 6.2 9.2 4 12 4M12 2C8.1 2 5 5.1 5 9C5 14.2 12 22 12 22S19 14.2 19 9C19 5.1 15.9 2 12 2M12 10C13.33 10 16 10.67 16 12V12.16C15.03 13.28 13.6 14 12 14S8.97 13.28 8 12.16V12C8 10.67 10.67 10 12 10M12 9C10.9 9 10 8.1 10 7S10.9 5 12 5 14 5.9 14 7 13.1 9 12 9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedMapMarkerAccount',
  mixins: [icon]
};
</script>