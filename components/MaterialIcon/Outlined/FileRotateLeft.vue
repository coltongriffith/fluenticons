<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-file-rotate-left-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M4 11C4 6.58 7.58 3 12 3L13 3.06V5.08L12 5C8.69 5 6 7.69 6 11H9L5 15L1 11H4M17 7H13C11.9 7 11 7.9 11 9V18C11 19.11 11.9 20 13 20H19C20.11 20 21 19.11 21 18V11L17 7M19 18H13V9H16V12H19V18Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFileRotateLeft',
  mixins: [icon]
};
</script>