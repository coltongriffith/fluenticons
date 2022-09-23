<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-tray-remove" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2 17A2 2 0 0 0 4 19H20A2 2 0 0 0 22 17V12H20V17H4V12H2M14.12 5.46L15.54 6.88L13.41 9L15.54 11.12L14.12 12.54L12 10.41L9.88 12.54L8.46 11.12L10.59 9L8.46 6.88L9.88 5.46L12 7.59Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTrayRemove.svg',
  mixins: [icon]
};
</script>