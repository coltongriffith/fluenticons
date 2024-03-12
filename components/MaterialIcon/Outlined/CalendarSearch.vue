<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-search-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.3 18.9C19.7 18.2 20 17.4 20 16.5C20 14 18 12 15.5 12S11 14 11 16.5 13 21 15.5 21C16.4 21 17.2 20.8 17.9 20.3L21 23.4L22.4 22L19.3 18.9M15.5 19C14.1 19 13 17.9 13 16.5S14.1 14 15.5 14 18 15.1 18 16.5 16.9 19 15.5 19M5 19V9H19V11C19.8 11.5 20.5 12.2 21 13V5C21 3.9 20.1 3 19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10.8C10.2 20.4 9.8 19.8 9.5 19H5M19 5V7H5V5H19Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedCalendarSearch',
  mixins: [icon]
};
</script>