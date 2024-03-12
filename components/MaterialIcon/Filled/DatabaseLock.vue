<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-database-lock" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11,3C15.42,3 19,4.79 19,7C19,9.21 15.42,11 11,11C6.58,11 3,9.21 3,7C3,4.79 6.58,3 11,3M19,12.03C17.11,12.24 15.57,13.62 15.13,15.43C13.92,15.79 12.5,16 11,16C6.58,16 3,14.21 3,12V9C3,11.21 6.58,13 11,13C15.42,13 19,11.21 19,9V12.03M14,17.71V20.71C13.07,20.9 12.06,21 11,21C6.58,21 3,19.21 3,17V14C3,16.21 6.58,18 11,18C12.06,18 13.07,17.9 14,17.71M19.5,14A2.5,2.5 0 0,1 22,16.5V17A1,1 0 0,1 23,18V22A1,1 0 0,1 22,23H17A1,1 0 0,1 16,22V18A1,1 0 0,1 17,17V16.5A2.5,2.5 0 0,1 19.5,14M19.5,15A1.5,1.5 0 0,0 18,16.5V17H21V16.5A1.5,1.5 0 0,0 19.5,15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledDatabaseLock',
  mixins: [icon]
};
</script>