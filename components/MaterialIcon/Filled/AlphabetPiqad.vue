<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-alphabet-piqad" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M13.04 4L6.54 17.85C6.21 18.55 5.5 19 4.73 19H4V20H16C17.2 20 18.27 20.54 19 21.39H20C19.05 19.32 17 18 14.7 18H12C11.29 18 10.62 17.63 10.24 17.03C9.85 16.43 9.8 15.68 10.1 15.03L10.58 14H19V13H17.5C15.29 13 13.5 11.21 13.5 9C13.5 6.79 15.29 5 17.5 5H20V4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAlphabetPiqad.svg',
  mixins: [icon]
};
</script>