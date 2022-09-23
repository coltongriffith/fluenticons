<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-shore" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M20 12H22V14H20C18.6 14 17.3 13.6 16 13C13.5 14.3 10.5 14.3 8 13C6.7 13.6 5.4 14 4 14H2V12H4C5.4 12 6.8 11.5 8 10.7C10.4 12.4 13.6 12.4 16 10.7C17.2 11.5 18.6 12 20 12M20 6H22V8H20C18.6 8 17.3 7.7 16 7C13.5 8.3 10.5 8.3 8 7C6.7 7.7 5.4 8 4 8H2V6H4C5.4 6 6.8 5.5 8 4.7C10.4 6.4 13.6 6.4 16 4.7C17.2 5.5 18.6 6 20 6M22 20H2V18H22" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledShore.svg',
  mixins: [icon]
};
</script>