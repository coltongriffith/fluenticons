<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-dice-d6" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.05 13.5C13.05 14.27 12.61 14.83 12 14.83S10.85 14.27 10.85 13.5L10.83 12.78C10.83 12.78 11.21 12 11.95 12.1C12.56 12.1 13.05 12.73 13.05 13.5M21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5M14.55 13.41C14.5 11.45 13.19 10.87 12.53 10.87C11.41 10.87 10.86 11.53 10.86 11.53S10.89 9.5 13.39 9.53V8.33C13.39 8.33 9.33 7.94 9.3 12.66C9.27 16.86 12.77 16 12.77 16S14.61 15.47 14.55 13.41Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDiceD6.svg',
  mixins: [icon]
};
</script>