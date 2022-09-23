<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pill-multiple" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16.2 3.5C15.2 2.5 13.9 2 12.7 2S10.1 2.5 9.2 3.5L3.4 9.1C1.4 11.1 1.4 14.2 3.4 16.2S8.5 18.2 10.5 16.2L16.2 10.5C18.1 8.6 18.1 5.4 16.2 3.5M14.8 9.1L12 11.9L8.4 8.4L4 12.8C4 12 4.2 11.1 4.9 10.5L10.6 4.8C11.1 4.3 11.9 4 12.6 4S14.1 4.3 14.7 4.8C15.9 6.1 15.9 7.9 14.8 9.1M19.6 7.1C19.6 7.9 19.4 8.6 19.2 9.4C20.2 10.6 20.2 12.4 19.1 13.5L16.3 16.3L14.8 14.8L12 17.6C10.7 18.9 8.9 19.6 7.2 19.6C7.4 19.9 7.6 20.2 7.9 20.5C9.9 22.5 13 22.5 15 20.5L20.7 14.8C22.7 12.8 22.7 9.7 20.7 7.7C20.2 7.5 19.9 7.3 19.6 7.1Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPillMultiple.svg',
  mixins: [icon]
};
</script>