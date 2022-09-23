<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-racing-helmet" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.2,11.2C2,13.6 2.7,15.6 4.2,17.4C5.7,19.2 7.7,20 10.1,20H20.1C20.6,20 21.1,19.8 21.5,19.4C21.9,19 22.1,18.5 22.1,18V17.2C22.1,16.6 22,15.9 21.9,15H13.7C12.7,15 11.9,14.6 11.2,13.9C10.5,13.2 10.1,12.3 10.1,11.4C10.1,9.8 10.8,8.7 12.3,8.1L17.1,6C15.4,4.8 13.4,4.1 11.1,4C8.9,3.8 6.9,4.5 5.1,5.9C3.3,7.3 2.4,9 2.2,11.2M12.1,11.4C12.1,11.8 12.3,12.2 12.6,12.5C12.9,12.8 13.3,13 13.7,13H21.5C20.9,10.8 20,9 18.7,7.6L13.1,9.9C12.4,10.1 12.1,10.6 12.1,11.4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRacingHelmet.svg',
  mixins: [icon]
};
</script>