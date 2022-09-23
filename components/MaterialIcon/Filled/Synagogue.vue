<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-synagogue" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M6 8V21H10V16C10 14.9 10.9 14 12 14S14 14.9 14 16V21H18V8L12 3L6 8M13.5 10C13.5 10.8 12.8 11.5 12 11.5S10.5 10.8 10.5 10 11.2 8.5 12 8.5 13.5 9.2 13.5 10M3 5C1.9 5 1 5.9 1 7V8H5V7C5 5.9 4.1 5 3 5M1 9H5V21H1V9M21 5C19.9 5 19 5.9 19 7V8H23V7C23 5.9 22.1 5 21 5M19 9H23V21H19V9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSynagogue.svg',
  mixins: [icon]
};
</script>