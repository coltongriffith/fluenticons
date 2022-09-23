<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-kettle-alert" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.5 3C4.8 3 1 5.7 1 9C1 10.2 1.5 11.3 2.4 12.3C1.5 13.5 1 15 1 16.5V20C1 21.1 1.9 22 3 22H16C17.1 22 18 21.1 18 20V16.5C18 15.3 17.7 14.1 17 13L19 11L16 8L13.9 10.1C12.6 9.4 11.1 9 9.5 9C7.7 9 5.9 9.5 4.6 10.4C4.2 10 4 9.5 4 9C4 7.2 6.5 5.8 9.5 5.8C10.9 5.8 12.3 6.1 13.3 6.7L15.3 4.7C13.8 3.6 11.7 3 9.5 3M9.5 11C9.8 11 10.2 11 10.5 11.1C7.4 11.6 5 14.2 5 17.5V20H3V17.5C3 13.9 5.9 11 9.5 11M21 13V7H23V13H21M21 17V15H23V17H21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledKettleAlert.svg',
  mixins: [icon]
};
</script>