<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-land-fields" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M15.3 4C14.5 5.1 14 6.5 14 8H10C10 6.4 10.8 4.9 12 4H15.3M14 14H10C10 12.5 9.5 11.1 8.7 10H12C13.2 10.9 14 12.4 14 14M4 4H9.3C8.5 5.1 8 6.5 8 8H4V4M4 10H6C7.2 10.9 8 12.3 8 14H4V10M4 20V16H9.3C8.5 17.1 8 18.5 8 20H4M10 20C10 18.4 10.8 16.9 12 16H15.3C14.5 17.1 14 18.5 14 20H10M20 20H16C16 18.4 16.8 16.9 18 16H20V20M20 14H16C16 12.5 15.5 11.1 14.7 10H20V14M20 8H16C16 6.4 16.8 4.9 18 4H20V8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLandFields.svg',
  mixins: [icon]
};
</script>