<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-table-key" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.8 17C16.4 15.8 15.3 15 14 15C12.3 15 11 16.3 11 18S12.3 21 14 21C15.3 21 16.4 20.2 16.8 19H19V21H21V19H23V17H16.8M14 19C13.4 19 13 18.5 13 18S13.4 17 14 17 15 17.5 15 18 14.6 19 14 19M9 18H4V14H10V15C10.9 13.8 12.4 13 14 13C15.1 13 16.1 13.4 17 14H18V15H20V6C20 4.9 19.1 4 18 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H9.4C9.1 19.4 9 18.7 9 18M12 8H18V12H12V8M4 8H10V12H4V8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledTableKey.svg',
  mixins: [icon]
};
</script>