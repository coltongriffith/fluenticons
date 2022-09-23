<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-human-edit" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.07 14.88L21.12 16.93L15.06 23H13V20.94L19.07 14.88M21.04 13.13C21.18 13.13 21.31 13.19 21.42 13.3L22.7 14.58C22.92 14.79 22.92 15.14 22.7 15.35L21.7 16.35L19.65 14.3L20.65 13.3C20.76 13.19 20.9 13.13 21.04 13.13M21 9H15V16L13 18V16H11V22H9V9H3V7H21V9M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledHumanEdit.svg',
  mixins: [icon]
};
</script>