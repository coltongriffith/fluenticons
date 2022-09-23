<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-ideogram-cjk-variant" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M11 4V6H4V8H15.36C15.13 8.87 14.63 9.77 13.88 10.69C13.35 11.35 12.71 12 12 12.67C11.29 12 10.65 11.35 10.12 10.69C9.65 10.12 9.3 9.55 9.03 9H6.85C7.21 10.05 7.82 11.03 8.56 11.95C9.13 12.66 9.79 13.34 10.5 14L5.36 18.23L6.64 19.77L12 15.34L17.36 19.77L18.64 18.23L13.5 14C14.21 13.34 14.87 12.66 15.44 11.95C16.41 10.74 17.16 9.43 17.4 8H20V6H13V4Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledIdeogramCjkVariant.svg',
  mixins: [icon]
};
</script>