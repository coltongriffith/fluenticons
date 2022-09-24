<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cookie-alert" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 10H16V9C16 8 15 8 15 8H13V7C13 6 12 6 12 6H11V4C11 3 10 3 10 3C5 3 1 7 1 12S5 21 10 21 19 17 19 12C19 11.5 19 11 18.9 10.5C18.6 10 18 10 18 10M4.5 13C3.7 13 3 12.3 3 11.5S3.7 10 4.5 10 6 10.7 6 11.5 5.3 13 4.5 13M6 7.5C6 6.7 6.7 6 7.5 6S9 6.7 9 7.5 8.3 9 7.5 9 6 8.3 6 7.5M9 19C8.2 19 7.5 18.3 7.5 17.5S8.2 16 9 16 10.5 16.7 10.5 17.5 9.8 19 9 19M9.5 14C8.7 14 8 13.3 8 12.5S8.7 11 9.5 11 11 11.7 11 12.5 10.3 14 9.5 14M14.5 16C13.7 16 13 15.3 13 14.5S13.7 13 14.5 13C15.3 13 16 13.7 16 14.5S15.3 16 14.5 16M21 15H23V17H21V15M23 7V13H21V7H23Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledCookieAlert',
  mixins: [icon]
};
</script>