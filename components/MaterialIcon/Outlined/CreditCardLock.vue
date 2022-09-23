<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-credit-card-lock-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21.8 15V13.5C21.8 12.1 20.4 11 19 11S16.2 12.1 16.2 13.5V15C15.6 15 15 15.6 15 16.2V19.7C15 20.4 15.6 21 16.2 21H21.7C22.4 21 23 20.4 23 19.8V16.3C23 15.6 22.4 15 21.8 15M20.5 15H17.5V13.5C17.5 12.7 18.2 12.2 19 12.2S20.5 12.7 20.5 13.5V15M13 19.7V18H4V12H14.5C15.18 10.28 16.96 9 19 9C20.13 9 21.17 9.4 22 10.04V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.03C13 19.9 13 19.8 13 19.7M4 6H20V8H4V6Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedCreditCardLock',
  mixins: [icon]
};
</script>