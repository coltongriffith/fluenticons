<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-stretch-to-page" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20,2H4C2.89,2 2,2.89 2,4V20C2,21.11 2.89,22 4,22H20C21.11,22 22,21.11 22,20V4C22,2.89 21.11,2 20,2M9,19H5V15L6.29,16.29L7.83,14.75L9.25,16.17L7.71,17.71M7.83,9.25L6.29,7.71L5,9V5H9L7.71,6.29L9.25,7.83M19,19H15L16.29,17.71L14.75,16.17L16.17,14.75L17.71,16.29L19,15M19,9L17.71,7.71L16.17,9.25L14.75,7.83L16.29,6.29L15,5H19" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledStretchToPage.svg',
  mixins: [icon]
};
</script>