<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-database-marker-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.35 16 12.69 15.97 13.03 15.95C13 15.8 13 15.65 13 15.5C13 14.96 13.09 14.44 13.24 13.94C12.83 14 12.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V10.03C18.17 10 18.33 10 18.5 10C19 10 19.5 10.08 20 10.22V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C13.06 21 14.07 20.89 15 20.71C14.62 20.14 14.25 19.5 13.93 18.85C13.34 18.94 12.71 19 12 19M12 5C15.87 5 18 6.5 18 7S15.87 9 12 9 6 7.5 6 7 8.13 5 12 5M18.5 12C16.6 12 15 13.6 15 15.5C15 18.1 18.5 22 18.5 22S22 18.1 22 15.5C22 13.6 20.4 12 18.5 12M18.5 16.8C17.8 16.8 17.3 16.2 17.3 15.6C17.3 14.9 17.9 14.4 18.5 14.4S19.7 15 19.7 15.6C19.8 16.2 19.2 16.8 18.5 16.8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedDatabaseMarker',
  mixins: [icon]
};
</script>