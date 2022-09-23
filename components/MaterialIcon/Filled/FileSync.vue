<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-sync" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 17.5C11 13.9 13.9 11 17.5 11C18.4 11 19.2 11.2 20 11.5V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H12.8C11.7 20.8 11 19.2 11 17.5M13 3.5L18.5 9H13V3.5M17 12V13.5C19.2 13.5 21 15.3 21 17.5C21 18.3 20.8 19.1 20.3 19.7L19.2 18.6C19.4 18.3 19.5 17.9 19.5 17.5C19.5 16.1 18.4 15 17 15V16.5L14.8 14.3L17 12M17 23V21.5C14.8 21.5 13 19.7 13 17.5C13 16.7 13.2 15.9 13.7 15.3L14.8 16.4C14.6 16.7 14.5 17.1 14.5 17.5C14.5 18.9 15.6 20 17 20V18.5L19.2 20.7L17 23Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFileSync.svg',
  mixins: [icon]
};
</script>