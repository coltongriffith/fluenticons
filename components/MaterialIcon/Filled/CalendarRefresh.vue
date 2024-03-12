<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-refresh" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H14C13.4 20.5 12.9 19.8 12.5 19H5V8H19V10.6C19.7 10.7 20.4 10.9 21 11.3V5C21 3.9 20.1 3 19 3M18 12.5C19.1 12.5 20.1 12.9 20.8 13.7L22 12.5V16.5H18L19.8 14.7C19.3 14.3 18.7 14 18 14C16.6 14 15.5 15.1 15.5 16.5S16.6 19 18 19C18.8 19 19.5 18.6 20 18H21.7C21.1 19.5 19.7 20.5 18 20.5C15.8 20.5 14 18.7 14 16.5S15.8 12.5 18 12.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledCalendarRefresh',
  mixins: [icon]
};
</script>