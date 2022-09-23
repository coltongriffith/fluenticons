<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-cordova" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20.18,21.55H16.94L17.17,18.82H15.58L15.35,21.55H8.65L8.42,18.82H6.83L7.06,21.55H3.82L2,9.73L6.55,2.45H17.45L22,9.73L20.18,21.55M16.55,6.09H13.62L13.82,7.45H10.18L10.38,6.09H7.45L5.64,9.73L6.55,17H17.45L18.36,9.73L16.55,6.09M14.95,14.59C14.7,14.59 14.5,13.83 14.5,12.9C14.5,11.96 14.7,11.2 14.95,11.2C15.21,11.2 15.41,11.96 15.41,12.9C15.41,13.83 15.21,14.59 14.95,14.59M9.22,14.73C8.96,14.73 8.76,13.97 8.76,13.04C8.76,12.1 8.96,11.35 9.22,11.35C9.47,11.35 9.67,12.1 9.67,13.04C9.67,13.97 9.47,14.73 9.22,14.73Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledCordova.svg',
  mixins: [icon]
};
</script>