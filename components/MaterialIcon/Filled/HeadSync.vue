<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-head-sync" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M13 15V13.5C10.79 13.5 9 11.71 9 9.5C9 8.68 9.25 7.92 9.67 7.29L10.76 8.38C10.59 8.72 10.5 9.1 10.5 9.5C10.5 10.88 11.62 12 13 12V10.5L15.25 12.75L13 15M16.33 11.71L15.24 10.62C15.41 10.28 15.5 9.9 15.5 9.5C15.5 8.12 14.38 7 13 7V8.5L10.75 6.25L13 4V5.5C15.21 5.5 17 7.29 17 9.5C17 10.32 16.75 11.08 16.33 11.71Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHeadSync.svg',
  mixins: [icon]
};
</script>