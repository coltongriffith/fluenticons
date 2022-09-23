<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-bat" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M0.75,8C0.75,8 5,7 8,9C8,9 8.5,12.75 10.5,12.75V11C10.5,11 11,12 12,12C13,12 13.5,11 13.5,11V12.75C15.5,12.75 16,9 16,9C19,7 23.25,8 23.25,8C21.25,9 21,12.5 21,12.5C17,12.5 17,15.75 17,15.75C12,14.75 12,18.5 12,18.5C12,18.5 12,14.75 7,15.75C7,15.75 7,12.5 3,12.5C3,12.5 2.75,9 0.75,8Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledBat.svg',
  mixins: [icon]
};
</script>