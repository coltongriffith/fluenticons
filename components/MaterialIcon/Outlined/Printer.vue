<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-printer-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 8C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8H6V3H18V8H19M8 5V8H16V5H8M16 19V15H8V19H16M18 15H20V11C20 10.45 19.55 10 19 10H5C4.45 10 4 10.45 4 11V15H6V13H18V15M19 11.5C19 12.05 18.55 12.5 18 12.5C17.45 12.5 17 12.05 17 11.5C17 10.95 17.45 10.5 18 10.5C18.55 10.5 19 10.95 19 11.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedPrinter',
  mixins: [icon]
};
</script>