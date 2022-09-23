<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-database-export" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C12.5,11 13,10.97 13.5,10.92V9.5H16.39L15.39,8.5L18.9,5C17.5,3.8 14.94,3 12,3M18.92,7.08L17.5,8.5L20,11H15V13H20L17.5,15.5L18.92,16.92L23.84,12M4,9V12C4,14.21 7.58,16 12,16C13.17,16 14.26,15.85 15.25,15.63L16.38,14.5H13.5V12.92C13,12.97 12.5,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C14.94,21 17.5,20.2 18.9,19L17,17.1C15.61,17.66 13.9,18 12,18C7.58,18 4,16.21 4,14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDatabaseExport.svg',
  mixins: [icon]
};
</script>