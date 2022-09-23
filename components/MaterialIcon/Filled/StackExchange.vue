<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-stack-exchange" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3.9 10.72H20V14.03H3.9V10.72M3.9 6.44H20V9.75H3.9V6.44M17.5 2H6.5C5.06 2 3.9 3.18 3.9 4.65V5.5H20V4.65C20 3.18 18.88 2 17.5 2M3.9 15V15.84C3.9 17.31 5.06 18.5 6.5 18.5H13.37V22L16.77 18.5H17.5C18.94 18.5 20.11 17.31 20.11 15.84V15H3.9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledStackExchange.svg',
  mixins: [icon]
};
</script>